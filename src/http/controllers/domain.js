/**
 * @file http/controllers/domain.js
 * @overview controller for domain routes
 */

module.exports = function controller({ domain, serializers, utils, validation }) {
  async function create(ctx) {
    const { type } = ctx.state
    const { body, method } = ctx.request
    validation.validateBody({ body, method, type })
    const { data: { properties } } = body
    const result = await domain.create({ data: properties, type })
    const doc = serializers.serialize({ input: result, single: true })
    ctx.body = doc
    ctx.status = 200
    ctx.type = 'application/json'
  }

  async function destroy(ctx) {
    const { type } = ctx.state
    const { id } = ctx.params
    await domain.destroy({ id, type })
    ctx.status = 204
  }

  async function detail(ctx) {
    const { type } = ctx.state
    const { id } = ctx.params
    const result = await domain.detail({ id, type })
    const doc = serializers.serialize({ input: result, single: true })
    ctx.body = doc
    ctx.status = 200
    ctx.type = 'application/json'
  }

  async function list(ctx) {
    const { type } = ctx.state
    const { querystring } = ctx.request
    const query = utils.parseQuery(querystring)
    validation.validateQuery({ query, type })
    const { filters, page, sort } = utils.transformQuery(query)
    const result = await domain.list({ filters, page, sort, type })
    const doc = serializers.serialize({ input: result, single: false })
    ctx.body = doc
    ctx.status = 200
    ctx.type = 'application/json'
  }

  async function update(ctx) {
    const { type } = ctx.state
    const { id } = ctx.params
    const { body, method } = ctx.request
    validation.validateBody({ body, id, method, type })
    const { data: { properties } } = body
    const result = await domain.update({ data: properties, id, type })
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
