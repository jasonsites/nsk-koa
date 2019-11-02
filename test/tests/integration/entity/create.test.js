const { createServer } = require('http')

const Bluebird = require('bluebird')
const config = require('config')
const { range } = require('lodash')
const { afterEach, before, describe, it } = require('mocha')
const sinon = require('sinon')
const { agent } = require('supertest')

const assertions = require('../../assertions')
const chance = require('../../../fixtures/chance')
const { bootstrap, loadModules } = require('../../../utils')

describe('[integration] POST /{namespace}/entities', function () {
  before('load modules', async function () {
    this.sandbox = sinon.createSandbox()
    this.timeout(30000)
    await bootstrap()
    await loadModules.call(this, { app: 'http/app', core: 'core' })
    this.namespace = config.get('api.namespace')
    this.request = agent(createServer(this.app.callback()))
  })

  afterEach(function () {
    this.sandbox.restore()
  })

  describe('failure states', function () {
    it('fails (400) with invalid payload', async function () {
      const { core: { ErrorType }, namespace } = this

      const body = { foo: 'bar' }
      const status = 400

      return Bluebird.try(() => this.request
        .post(`/${namespace}/entities`)
        .send(body)
        .expect(status)
        .then(({ body: actual }) => {
          const expectations = [{
            detail: '"data" is required',
            pointer: '/data',
            status,
            title: ErrorType.Validation,
          }, {
            detail: '"foo" is not allowed',
            pointer: '/foo',
            status,
            title: ErrorType.Validation,
          }]

          const errors = () => range(expectations.length)
            .map((idx) => assertions.common.assertError({
              ...{ error: actual.errors[idx] },
              ...expectations[idx],
            }))

          assertions.common.assertErrors({ actual, errors })
        }))
    })
  })

  describe('success states', function () {
    it('succeeds (200) with valid `entity` payload', async function () {
      const { core, namespace } = this

      const body = chance.domainEntityBody(core)

      return Bluebird.try(() => this.request
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
        }))
    })
  })
})
