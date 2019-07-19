/**
 * @file http/controllers/domain.js
 * @overview controller for domain routes
 */

module.exports = function domainController({ domain, serializers, validation }) {
  async function create(ctx) {
    const { body, method } = ctx.request
    validation.validate({ body, method })
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

  /**
   * NOTE: the id for PATCH requests exists in both the path (params) and
   * the request body. The shape of the body is validated,
   * but the path id is the only one used for updating the resource
   */
  async function update(ctx) {
    // const { id } = ctx.params
    const { body, method } = ctx.request
    validation.validate({ body, method })
    await domain.update({ data: body })
    ctx.status = 204
  }

  return { create, destroy, detail, update }
}

module.exports.inject = {
  require: {
    domain: 'domain',
    serializers: {
      domain: 'serializers/domain',
    },
    validation: 'validation',
  },
}
