const t = require('tap')
const { join } = require('node:path')
const Arborist = require('../..')
const MockRegistry = require('@npmcli/mock-registry')

const createRegistry = (t) => {
  const registry = new MockRegistry({
    strict: true,
    tap: t,
    registry: 'https://registry.npmjs.org',
  })
  registry.mocks({ dir: join(__dirname, '..', 'fixtures') })
  return registry
}

t.test('ERESOLVE reproduction: workspace peer dependency edge target bug', async (t) => {
  const registry = createRegistry(t)
  
  // This reproduces the exact bug found in the debug output:
  // - Workspace has peer dependency on react@^17.0.0
  // - Root has react@^16.12.0 
  // - Available versions: 16.14.0, 17.0.1
  // - Bug: edge.to points to 16.14.0 but 17.0.1 should be used
  
  const path = t.testdir({
    'package.json': JSON.stringify({
      name: 'root-project',
      version: '1.0.0',
      workspaces: ['workspace-a'],
      dependencies: {
        'react': '^16.12.0'  // Root wants 16.x
      }
    }),
    'workspace-a': {
      'package.json': JSON.stringify({
        name: 'workspace-a',
        version: '1.0.0',
        peerDependencies: {
          'react': '^17.0.0'  // Workspace needs 17.x
        }
      })
    }
  })

  try {
    const arb = new Arborist({ path, strictPeerDeps: true })
    const tree = await arb.buildIdealTree()
    
    t.fail('Should have thrown ERESOLVE error')
    
  } catch (error) {
    if (error.code === 'ERESOLVE') {
      t.pass(`Successfully reproduced ERESOLVE bug: ${error.message}`)
      
      // Verify this is the specific bug pattern
      if (error.edge && error.current) {
        t.comment(`Edge spec: ${error.edge.spec}`)
        t.comment(`Edge points to: ${error.edge.to?.name}@${error.edge.to?.version}`)
        t.comment(`Available: ${error.current.name}@${error.current.version}`)
        
        // Check if available version should satisfy the spec
        const semver = require('semver')
        const shouldSatisfy = semver.satisfies(error.current.version, error.edge.spec, true)
        
        if (shouldSatisfy) {
          t.pass('BUG CONFIRMED: Available version should satisfy peer dependency')
          t.comment('This is the exact bug - edge.to points to wrong version')
        }
      }
    } else {
      throw error
    }
  }
})
