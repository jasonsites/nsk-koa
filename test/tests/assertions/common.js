const chai = require('chai')
const moment = require('moment')

const { expect } = chai
chai.use(require('chai-uuid'))

module.exports = {
  assertError,
  assertErrors,
  assertErrorThrown,
  assertHealth,
  assertMulti,
  assertSingle,
  assertValidDatetimeISO,
}

function assertError({ error, detail, pointer, status, title }) {
  expect(error).to.be.an('object').with.all.keys(['detail', 'source', 'status', 'title'])
  expect(error.detail).to.equal(detail)
  expect(error.source).to.be.an('object').with.all.keys(['pointer'])
  expect(error.source.pointer).to.equal(pointer)
  expect(error.status).to.equal(status)
  expect(error.title).to.equal(title)
}

function assertErrors({ errors, actual }) {
  expect(actual).to.be.an('object').with.all.keys(['errors'])
  expect(actual.errors).to.be.an('array')
  errors()
}

function assertErrorThrown({ call, message, type = Error }) {
  expect(call).to.throw(type, message)
}

function assertHealth({ actual }) {
  expect(actual).to.be.an('object').with.all.keys(['meta'])
  expect(actual.meta).to.be.an('object').with.all.keys(['status'])
  expect(actual.meta.status).to.equal('healthy')
}

function assertMulti({ entities, actual }) {
  expect(actual).to.be.an('object').with.all.keys(['data', 'meta'])
  expect(actual.meta).to.be.an('object')
  expect(actual.data).to.be.an('array')
  entities()
}

function assertSingle({ entity, actual }) {
  expect(actual).to.be.an('object').with.all.keys(['data'])
  expect(actual.data).to.be.an('object')
  entity()
}

function assertValidDatetimeISO({ iso }) {
  const valid = moment(iso, moment.ISO_8601).isValid()
  expect(valid).to.equal(true)
}
