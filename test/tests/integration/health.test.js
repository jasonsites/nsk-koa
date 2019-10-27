const { createServer } = require('http')

const Bluebird = require('bluebird')
const config = require('config')
const { before, describe, it } = require('mocha')
const { agent } = require('supertest')

const assertions = require('../assertions')
const { bootstrap, loadModules } = require('../../utils')

describe('[integration] /{namespace}/health', function () {
  before('load modules', async function () {
    this.timeout(30000)
    await bootstrap()
    await loadModules.call(this, { app: 'http/app' })
    this.namespace = config.get('api.namespace')
    this.request = agent(createServer(this.app.callback()))
  })

  describe('success states', function () {
    it('succeeds (200) with healthy status', function () {
      return Bluebird.try(() => this.request
        .get(`/${this.namespace}/health`)
        .expect(200)
        .then(({ body: actual }) => {
          assertions.common.assertHealth({ actual })
        }))
    })
  })
})
