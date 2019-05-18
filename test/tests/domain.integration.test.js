const { expect } = require('chai')
const config = require('config')
const { createServer } = require('http')
const { afterEach, before, describe, it } = require('mocha')
const sinon = require('sinon')
const { agent } = require('supertest')

const chance = require('../mocks/chance')
const { bootstrap, loadModules } = require('../utils')

function generateRequest() {
  const entityId = chance.guid()
  const body = {
    jsonapi: { version: '1.0' },
    data: {
      type: 'entity',
      id: entityId,
      attributes: {
        domain: {
          key1: chance.sentence(),
          key2: chance.sentence(),
        },
      },
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
    const { body, entityId } = generateRequest()

    it('succeeds (201) with valid domain payload', function () {
      const baseUrl = config.get('api.baseURL')
      return this.request
        .post('/domain')
        .send(body)
        .expect(201)
        .then((res) => {
          const doc = res.body
          expect(doc).to.be.an('object').with.all.keys(['jsonapi', 'data'])
          const { data } = doc
          expect(data).to.be.an('object')
            .with.all.keys(['type', 'id', 'attributes', 'links'])
          const { type, id, attributes, links } = data
          expect(type).to.equal(body.data.type)
          expect(id).to.equal(entityId)
          expect(attributes).to.deep.equal(body.data.attributes)
          expect(links).to.be.an('object').with.all.keys(['self'])
          const { self } = links
          expect(self).to.equal(`${baseUrl}/domain/${entityId}`)
        })
    })
  })
})
