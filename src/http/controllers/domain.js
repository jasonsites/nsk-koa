/**
 * @file http/controllers/domain.js
 * @overview controller for domain routes
 */

module.exports = function controller({ domain, serializers, utils, validation }) {
  async function create(ctx) {
    const { correlation, type } = ctx.state
    const { body, method } = ctx.request
    validation.context(correlation).validateBody({ body, method, type })
    const { data: { properties } } = body
    const result = await domain.context(correlation).create({ data: properties, type })
    const doc = serializers.serialize({ input: result, single: true })
    ctx.body = doc
    ctx.status = 201
    ctx.type = 'application/json'
  }

  async function destroy(ctx) {
    const { correlation, type } = ctx.state
    const { id } = ctx.params
    await domain.context(correlation).destroy({ id, type })
    ctx.status = 204
  }

  async function detail(ctx) {
    const { correlation, type } = ctx.state
    const { id } = ctx.params
    const result = await domain.context(correlation).detail({ id, type })
    const doc = serializers.serialize({ input: result, single: true })
    ctx.body = doc
    ctx.status = 200
    ctx.type = 'application/json'
  }

  async function list(ctx) {
    const { correlation, type } = ctx.state
    const { querystring } = ctx.request
    const query = utils.parseQuery(querystring)
    validation.context(correlation).validateQuery({ query, type })
    const { filters, page, sort } = utils.transformQuery(query)
    const result = await domain.context(correlation).list({ filters, page, sort, type })
    const doc = serializers.serialize({ input: result, single: false })
    ctx.body = doc
    ctx.status = 200
    ctx.type = 'application/json'
  }

  async function update(ctx) {
    const { correlation, type } = ctx.state
    const { id } = ctx.params
    const { body, method } = ctx.request
    validation.context(correlation).validateBody({ body, id, method, type })
    const { data: { properties } } = body
    const result = await domain.context(correlation).update({ data: properties, id, type })
    const doc = serializers.serialize({ input: result, single: true })
    ctx.body = doc
    ctx.status = 200
    ctx.type = 'application/json'
  }

  return { create, destroy, detail, list, update }
}

module.exports.inject = {
  require: {
    domain: 'domain',
    serializers: 'serializers',
    utils: 'http/controllers/utils',
    validation: 'validation',
  },
}
