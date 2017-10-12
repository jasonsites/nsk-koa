const Bluebird = require('bluebird')
const { expect } = require('chai')
const { createServer } = require('http')
const { before, describe, it } = require('mocha')
const { agent } = require('supertest')

const { loadModules } = require('../../../utils')

describe('[integration] GET /feature/{id}', function () {
  this.timeout(30000)

  before('load modules', function () {
    return loadModules.call(this, {
      app: 'http/app',
    })
      .then(() => {
        this.request = agent(createServer(this.app.callback()))
      })
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
