const { createServer } = require('http')

const { expect } = require('chai')
const config = require('config')
const { afterEach, before, describe, it } = require('mocha')
const sinon = require('sinon')
const { agent } = require('supertest')

const { assertDomain } = require('../assertions')
const chance = require('../../fixtures/chance')
const { bootstrap, loadModules } = require('../../utils')

function generateRequest() {
  const entityId = chance.guid()
  const body = {
    domain: {
      key1: chance.sentence(),
      key2: chance.sentence(),
    },
  }
  return { body, entityId }
}

describe('[integration] POST /{namespace}/domain', function () {
  before('load modules', async function () {
    this.sandbox = sinon.createSandbox()
    this.timeout(30000)
    await bootstrap()
    await loadModules.call(this, { app: 'http/app' })
    this.request = agent(createServer(this.app.callback()))
    this.namespace = config.get('api.namespace')
  })

  afterEach(function () {
    this.sandbox.restore()
  })

  describe('failure states', function () {
    it.only('fails (400) with an invalid payload', function () {
      const body = { foo: 'bar' }

      return this.request
        .post(`/${this.namespace}/domain`)
        .send(body)
        .expect(400)
        .then(({ body: doc }) => {
          console.log(doc)
          expect(doc).to.be.an('object').with.all.keys(['errors'])
          expect(doc.errors).to.be.an('array').with.lengthOf(1)
          const [err] = doc.errors
          expect(err).to.have.property('title', 'Bad Request')
          expect(err).to.have.property('status', '400')
        })
    })
  })

  describe('success states', function () {
    it('succeeds (200) with valid domain payload', function () {
      const { body } = generateRequest()

      return this.request
        .post(`/${this.namespace}/domain`)
        .send(body)
        .expect(200)
        .then(({ body: doc }) => {
          assertDomain({ body, data: doc })
        })
    })
  })
})
