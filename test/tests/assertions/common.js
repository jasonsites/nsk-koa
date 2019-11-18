const chai = require('chai')
const config = require('config')
const moment = require('moment')

const { expect } = chai
chai.use(require('chai-uuid'))

const { defaultLimit, defaultOffset } = config.get('api.paging')

module.exports = {
  assertError,
  assertErrorThrown,
  assertErrorWithSource,
  assertErrors,
  assertHealthCheck,
  assertMetaPaging,
  assertMulti,
  assertSingle,
  assertSoftDelete,
  assertValidDatetimeISO,
}

function assertError({ actual, detail, status, title }) {
  expect(actual).to.be.an('object').with.all.keys(['detail', 'status', 'title'])
  expect(actual.detail).to.equal(detail)
  expect(actual.status).to.equal(status)
  expect(actual.title).to.equal(title)
}

function assertErrorThrown({ call, message, type = Error }) {
  expect(call).to.throw(type, message)
}

function assertErrorWithSource({ actual, detail, pointer, status, title }) {
  expect(actual).to.be.an('object').with.all.keys(['detail', 'source', 'status', 'title'])
  expect(actual.detail).to.equal(detail)
  expect(actual.source).to.be.an('object').with.all.keys(['pointer'])
  expect(actual.source.pointer).to.equal(pointer)
  expect(actual.status).to.equal(status)
  expect(actual.title).to.equal(title)
}

function assertErrors({ actual, errors, length }) {
  expect(actual).to.be.an('object').with.all.keys(['errors'])
  expect(actual.errors).to.be.an('array').with.lengthOf(length)
  errors()
}

function assertHealthCheck({ actual }) {
  expect(actual).to.be.an('object').with.all.keys(['meta'])
  expect(actual.meta).to.be.an('object').with.all.keys(['status'])
  expect(actual.meta.status).to.equal('healthy')
}

function assertMetaPaging({ actual, limit = defaultLimit, offset = defaultOffset, total = 0 }) {
  expect(actual).to.be.an('object').with.all.keys(['limit', 'offset', 'total'])
  expect(actual.limit).to.equal(limit)
  expect(actual.offset).to.equal(offset)
  expect(actual.total).to.equal(total)
}

function assertMulti({ actual, entities, paging }) {
  expect(actual).to.be.an('object').with.all.keys(['data', 'meta'])
  expect(actual.meta).to.be.an('object').with.all.keys(['paging'])
  expect(actual.data).to.be.an('array')
  entities()
  if (paging) paging()
}

function assertSingle({ actual, entity }) {
  expect(actual).to.be.an('object').with.all.keys(['data'])
  expect(actual.data).to.be.an('object')
  entity()
}

function assertSoftDelete({ actual }) {
  expect(actual.deleted).to.be.true
}

function assertValidDatetimeISO({ iso }) {
  const valid = moment(iso, moment.ISO_8601).isValid()
  expect(valid).to.equal(true)
}
