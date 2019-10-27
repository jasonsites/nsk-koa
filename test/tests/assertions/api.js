const chai = require('chai')

const { expect } = chai
chai.use(require('chai-uuid'))

// const common = require('./common')

module.exports = {
  assertDomainEntity,
}

function assertDomainEntity({ actual, core, expected, modified = false }) {
  console.log(modified)
  const { type, id, properties } = actual
  expect(type).to.equal(core.Entity.DomainEntity)
  expect(id).to.equal(undefined)
  expect(properties).to.be.an('object').with.all.keys([
    'name',
  ])
  expect(properties.name).to.equal(expected.properties.name)
  // expect(properties.created_by).to.equal(1)
  // common.assertValidDatetimeISO({ iso: properties.created_on })
  // expect(properties.cycle_template_id).to.equal(expected.properties.cycle_template_id)
  // expect(properties.expression).to.equal(expected.properties.expression)
  // if (modified) {
  //   expect(properties.modified_by).to.equal(1)
  //   common.assertValidDatetimeISO({ iso: properties.modified_on })
  // } else {
  //   expect(properties.modified_by).to.be.null
  //   expect(properties.modified_on).to.be.null
  // }
}
