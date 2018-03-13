const Bluebird = require('bluebird')
const { expect } = require('chai')
const { createServer } = require('http')
const { before, describe, it } = require('mocha')
const { agent } = require('supertest')

const { bootstrap, loadModules } = require('../utils')

describe('[integration] health', function () {
  before('load modules', async function () {
    this.timeout(30000)
    await bootstrap()
    await loadModules.call(this, { app: 'http/app' })
    this.request = agent(createServer(this.app.callback()))
  })

  describe('success states', function () {
    it('succeeds (200) with healthy status', function () {
      return Bluebird.try(() => this.request
        .get('/health')
        .expect(200)
        .then((res) => {
          const doc = res.body
          expect(doc).to.be.an('object')
            .with.all.keys(['meta'])
          const { meta } = doc
          expect(meta).to.be.an('object')
            .with.all.keys(['status'])
          const { status } = meta
          expect(status).to.equal('healthy')
        }))
    })
  })
})
