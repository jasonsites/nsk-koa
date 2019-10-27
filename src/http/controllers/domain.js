/**
 * @file http/controllers/domain.js
 * @overview controller for domain routes
 */

module.exports = function controller({ domain, serializers, validation }) {
  async function create(ctx) {
    const { body, method } = ctx.request
    const { type } = ctx.state
    validation.validateBody({ body, method, type })
    const data = await domain.create({ data: body })
    ctx.body = serializers.domain.buildDomain({ data })
    ctx.status = 200
    ctx.type = 'application/json'
  }

  async function destroy(ctx) {
    const { id } = ctx.params
    await domain.destroy({ id })
    ctx.status = 204
  }

  async function detail(ctx) {
    const { id } = ctx.params
    const data = await domain.detail({ id })
    ctx.body = serializers.domain.buildDomain({ data })
    ctx.status = 200
    ctx.type = 'application/json'
  }

  async function update(ctx) {
    const { id } = ctx.params
    const { body, method } = ctx.request
    const { type } = ctx.state
    validation.validateBody({ body, id, method, type })
    await domain.update({ data: body })
    ctx.status = 200
  }

  return { create, destroy, detail, update }
}

module.exports.inject = {
  require: {
    domain: 'domain',
    serializers: {
      domain: 'http/serializers/domain',
    },
    validation: 'http/validation/index',
  },
}
