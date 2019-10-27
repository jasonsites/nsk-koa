/**
 * @file test/tests/assertions.js
 * @overview test assertion functions
 */

const { expect } = require('chai')


module.exports = {
  assertDomain,
}

/**
 * Assertion wrapper for domain
 * @param {Array}      params.array  - input array
 * @param {Function[]} params.length - expected array length
 */
function assertDomain({ body, data }) {
  expect(data).to.be.an('object').with.all.keys(['domain'])
  expect(data.domain).to.be.an('object').with.all.keys(['key1', 'key2'])
  const { key1, key2 } = data.domain
  expect(key1).to.equal(body.domain.key1)
  expect(key2).to.equal(body.domain.key2)
}
