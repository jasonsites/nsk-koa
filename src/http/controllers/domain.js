/**
 * @file http/controllers/domain.js
 * @overview domain routes handlers
 */

const { conflict } = require('boom')
const { get } = require('lodash')

module.exports = function domainController({ jsonapi, domain, validation }) {
  async function create(ctx) {
    try {
      const { body, method } = ctx.request
      validation.validate({ body, method })
      const data = extractData({ body })
      const doc = await domain.create({ data })
      ctx.body = jsonapi.serialize({
        type: 'entity',
        source: doc.attrs,
        options: {},
      })
      ctx.status = 201
      ctx.type = 'application/vnd.api+json'
    } catch (err) {
      if (err.name === 'ConditionalCheckFailedException') {
        const id = get(ctx.request, 'body.data.id', 'UNKNOWN')
        throw conflict(`Resource with id ${id} already exists`)
      }
      throw err
    }
  }

  async function destroy(ctx) {
    const { id } = ctx.params
    await domain.destroy({ id })
    ctx.status = 204
  }

  async function detail(ctx) {
    const { id } = ctx.params
    const doc = await domain.detail({ id })
    ctx.body = jsonapi.serialize({
      type: 'entity',
      source: doc.attrs,
      options: {},
    })
    ctx.status = 200
    ctx.type = 'application/vnd.api+json'
  }

  /**
   * Compose data to be sent to the app layer/repo
   * @param  {Object} options.body - (parsed) jsonapi request body
   * @param  {String} options.id   - optional id from path (params)
   * @return {Object}
   */
  function extractData({ body, id }) {
    const feat = get(body, 'data.attributes.domain')
    return Object.assign({}, { id: id || get(body, 'data.id') }, feat)
  }

  /**
   * NOTE: the id for PATCH requests exists in both the path (params) and
   * the request body (jsonapi resource). The shape of the body is validated,
   * but the path id is the only one used for updating the resource
   */
  async function update(ctx) {
    const { id } = ctx.params
    const { body, method } = ctx.request
    validation.validate({ body, method })
    const data = extractData({ body, id })
    await domain.update({ data })
    ctx.status = 204
  }

  return { create, destroy, detail, update }
}

module.exports.inject = {
  require: {
    domain: 'domain',
    jsonapi: 'jsonapi',
    validation: 'validation',
  },
}
