const { createServer } = require('http')

const config = require('config')
const { range } = require('lodash')
const { afterEach, before, describe, it } = require('mocha')
const sinon = require('sinon')
const { agent } = require('supertest')

const assertions = require('../../assertions')
const chance = require('../../../fixtures/chance')
const { bootstrap, loadModules } = require('../../../utils')

describe('[integration] GET /{namespace}/resources/{id}', function () {
  before('load modules', async function () {
    this.timeout(30000)
    await bootstrap()
    await loadModules.call(this, {
      api: 'api/user',
      app: 'http/app',
      core: 'core',
    })
    this.namespace = config.get('api.namespace')
    this.request = agent(createServer(this.app.callback()))
    this.sandbox = sinon.createSandbox()
  })

  afterEach(function () {
    this.sandbox.restore()
  })

  describe('failure states', function () {
    it('fails (400) with invalid payload', async function () {
      const { core: { ErrorType, ValidationError }, namespace } = this

      this.sandbox.stub(this.api, 'client').rejects(new ValidationError('validation error'))

      const id = chance.guid()
      const status = 400

      return this.request
        .get(`/${namespace}/resources/${id}`)
        .expect(status)
        .then(({ body: actual }) => {
          const expectations = [{
            detail: 'validation error',
            status,
            title: ErrorType.Validation,
          }]
          const { length } = expectations
          const errors = () => range(length)
            .map((idx) => assertions.common.assertError({
              ...{ actual: actual.errors[idx] },
              ...expectations[idx],
            }))
          assertions.common.assertErrors({ actual, errors, length })
        })
    })
  })

  describe('success states', function () {
    it('succeeds (200) with valid payload', async function () {
      const { core, namespace } = this

      const id = 99
      const body = chance.domainResourceBody(core, { id, name: 'example' })
      const status = 200

      return this.request
        .get(`/${namespace}/resources/${id}`)
        .expect(status)
        .then(({ body: actual }) => {
          const resource = () => assertions.api.assertDomainResource({
            actual: actual.data,
            expected: body.data,
          })
          assertions.common.assertSingle({ actual, resource })
        })
    })
  })
})
