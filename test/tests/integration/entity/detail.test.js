const { createServer } = require('http')

const config = require('config')
const { range } = require('lodash')
const { afterEach, before, describe, it } = require('mocha')
const sinon = require('sinon')
const { agent } = require('supertest')

const assertions = require('../../assertions')
const chance = require('../../../fixtures/chance')
const { bootstrap, loadModules } = require('../../../utils')

describe('[integration] GET /{namespace}/entities/{id}', function () {
  before('load modules', async function () {
    this.timeout(30000)
    await bootstrap()
    await loadModules.call(this, {
      api: 'api/index',
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
        .get(`/${namespace}/entities/${id}`)
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
    it('succeeds (200) with valid `entity` payload', async function () {
      const { core, namespace } = this

      const body = chance.domainEntityBody(core)

      return this.request
        .post(`/${namespace}/entities`)
        .send(body)
        .expect(200)
        .then(({ body: actual }) => {
          const entity = () => assertions.api.assertDomainEntity({
            actual: actual.data,
            core,
            expected: body.data,
          })
          assertions.common.assertSingle({ actual, entity })
        })
    })
  })
})
