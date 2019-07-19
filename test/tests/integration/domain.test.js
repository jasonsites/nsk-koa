const { expect } = require('chai')
const { createServer } = require('http')
const { afterEach, before, describe, it } = require('mocha')
const sinon = require('sinon')
const { agent } = require('supertest')

const chance = require('../../fixtures/chance')
const { bootstrap, loadModules } = require('../../utils')
const {
  assertDomain,
} = require('../assertions')

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

describe('[integration] POST /domain', function () {
  before('load modules', async function () {
    this.sandbox = sinon.createSandbox()
    this.timeout(30000)
    await bootstrap()
    await loadModules.call(this, { app: 'http/app' })
    this.request = agent(createServer(this.app.callback()))
  })

  afterEach(function () {
    this.sandbox.restore()
  })

  describe('failure states', function () {
    it('fails (400) with an invalid payload', function () {
      return this.request
        .post('/domain')
        .send({ foo: 'bar' })
        .expect(400)
        .then((res) => {
          const doc = res.body
          expect(doc).to.be.an('object').with.all.keys(['errors'])
          expect(doc.errors).to.be.an('array').with.lengthOf(1)
          const err = doc.errors[0]
          expect(err).to.have.property('title', 'Bad Request')
          expect(err).to.have.property('status', '400')
        })
    })
  })

  describe('success states', function () {
    const { body } = generateRequest()

    it('succeeds (200) with valid domain payload', function () {
      return this.request
        .post('/domain')
        .send(body)
        .expect(200)
        .then((res) => {
          const doc = res.body
          assertDomain({ body, data: doc })
        })
    })
  })
})
