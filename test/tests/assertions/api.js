const chai = require('chai')

const { expect } = chai
chai.use(require('chai-uuid'))

module.exports = {
  assertDomainEntity,
}

function assertDomainEntity({ actual, core, expected }) {
  const { type, id, properties } = actual
  expect(type).to.equal(core.Entity.DomainEntity)
  expect(id).to.equal(undefined)
  expect(properties).to.be.an('object').with.all.keys(['name'])
  expect(properties.name).to.equal(expected.properties.name)
}
