const { createServer } = require('http')

const Bluebird = require('bluebird')
const { expect } = require('chai')
const config = require('config')
const { before, describe, it } = require('mocha')
const { agent } = require('supertest')

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
        .then(({ body: doc }) => {
          expect(doc).to.be.an('object').with.all.keys(['meta'])
          expect(doc.meta).to.be.an('object').with.all.keys(['status'])
          expect(doc.meta.status).to.equal('healthy')
        }))
    })
  })
})
