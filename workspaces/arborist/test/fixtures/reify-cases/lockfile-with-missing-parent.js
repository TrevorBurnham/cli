// generated from test/fixtures/lockfile-with-missing-parent
module.exports = t => {
  const path = t.testdir({
  "package-lock.json": JSON.stringify({
    "name": "lockfile-with-missing-parent",
    "version": "1.0.0",
    "lockfileVersion": 3,
    "requires": true,
    "packages": {
      "": {
        "name": "lockfile-with-missing-parent",
        "version": "1.0.0",
        "dependencies": {
          "glob": "7.1.6",
          "globby": "1.2.0",
          "minimatch": "3.0.3"
        }
      },
      "node_modules/array-union": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/array-union/-/array-union-1.0.2.tgz",
        "integrity": "sha512-Dxr6QJj/RdU/hCaBjOfxW+q6lyuVE6JFWIrAUpuOOhoJJoQ99cUn3igRaHVB5P9WrgFVN0FfArM3x0cueOU8ng==",
        "license": "MIT",
        "dependencies": {
          "array-uniq": "^1.0.1"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/array-uniq": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/array-uniq/-/array-uniq-1.0.3.tgz",
        "integrity": "sha512-MNha4BWQ6JbwhFhj03YK552f7cb3AzoE8SzeljgChvL1dl3IcvggXVz1DilzySZkCja+CXuZbdW7yATchWn8/Q==",
        "license": "MIT",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/async": {
        "version": "0.9.2",
        "resolved": "https://registry.npmjs.org/async/-/async-0.9.2.tgz",
        "integrity": "sha512-l6ToIJIotphWahxxHyzK9bnLR6kM4jJIIgLShZeqLY7iboHoGkdgFl7W2/Ivi4SkMJYGKqW8vSuk0uKUj6qsSw==",
        "license": "MIT"
      },
      "node_modules/balanced-match": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
        "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
        "license": "MIT"
      },
      "node_modules/brace-expansion": {
        "version": "1.1.11",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "license": "MIT",
        "dependencies": {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1"
        }
      },
      "node_modules/concat-map": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
        "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
        "license": "MIT"
      },
      "node_modules/fs.realpath": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
        "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
        "license": "ISC"
      },
      "node_modules/glob": {
        "version": "7.1.6",
        "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
        "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
        "deprecated": "Glob versions prior to v9 are no longer supported",
        "license": "ISC",
        "dependencies": {
          "fs.realpath": "^1.0.0",
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^3.0.4",
          "once": "^1.3.0",
          "path-is-absolute": "^1.0.0"
        },
        "engines": {
          "node": "*"
        },
        "funding": {
          "url": "https://github.com/sponsors/isaacs"
        }
      },
      "node_modules/glob/node_modules/minimatch": {
        "version": "3.0.4"
      },
      "node_modules/globby/node_modules/glob": {
        "version": "4.5.3",
        "resolved": "https://registry.npmjs.org/glob/-/glob-4.5.3.tgz",
        "integrity": "sha512-I0rTWUKSZKxPSIAIaqhSXTM/DiII6wame+rEC3cFA5Lqmr9YmdL7z6Hj9+bdWtTvoY1Su4/OiMLmb37Y7JzvJQ==",
        "deprecated": "Glob versions prior to v9 are no longer supported",
        "license": "ISC",
        "dependencies": {
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^2.0.1",
          "once": "^1.3.0"
        },
        "engines": {
          "node": "*"
        }
      },
      "node_modules/globby/node_modules/minimatch": {
        "version": "2.0.10",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-2.0.10.tgz",
        "integrity": "sha512-jQo6o1qSVLEWaw3l+bwYA2X0uLuK2KjNh2wjgO7Q/9UJnXr1Q3yQKR8BI0/Bt/rPg75e6SMW4hW/6cBHVTZUjA==",
        "deprecated": "Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue",
        "license": "ISC",
        "dependencies": {
          "brace-expansion": "^1.0.0"
        },
        "engines": {
          "node": "*"
        }
      },
      "node_modules/inflight": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
        "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
        "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
        "license": "ISC",
        "dependencies": {
          "once": "^1.3.0",
          "wrappy": "1"
        }
      },
      "node_modules/inherits": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
        "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
        "license": "ISC"
      },
      "node_modules/minimatch": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.3.tgz",
        "integrity": "sha512-NyXjqu1IwcqH6nv5vmMtaG3iw7kdV3g6MwlUBZkc3Vn5b5AMIWYKfptvzipoyFfhlfOgBQ9zoTxQMravF1QTnw==",
        "license": "ISC",
        "dependencies": {
          "brace-expansion": "^1.0.0"
        },
        "engines": {
          "node": "*"
        }
      },
      "node_modules/object-assign": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-2.1.1.tgz",
        "integrity": "sha512-CdsOUYIh5wIiozhJ3rLQgmUTgcyzFwZZrqhkKhODMoGtPKM+wt0h0CNIoauJWMsS9822EdzPsF/6mb4nLvPN5g==",
        "license": "MIT",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/once": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
        "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
        "license": "ISC",
        "dependencies": {
          "wrappy": "1"
        }
      },
      "node_modules/path-is-absolute": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
        "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
        "license": "MIT",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/wrappy": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
        "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
        "license": "ISC"
      }
    }
  }),
  "package.json": JSON.stringify({
    "name": "lockfile-with-missing-parent",
    "version": "1.0.0",
    "dependencies": {
      "glob": "7.1.6",
      "globby": "1.2.0",
      "minimatch": "3.0.3"
    }
  })
})
  return path
}