/**
 * @file http/controllers/domain.js
 * @overview domain routes handlers
 */

module.exports = function domainController({ domain, validation }) {
  async function create(ctx) {
    const { body, method } = ctx.request
    validation.validate({ body, method })
    const data = body
    const doc = await domain.create({ data })
    ctx.body = doc // TODO: serializer
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
    const doc = await domain.detail({ id })
    ctx.body = doc // TODO: serializer
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
    const data = body
    await domain.update({ data })
    ctx.status = 204
  }

  return { create, destroy, detail, update }
}

module.exports.inject = {
  require: {
    domain: 'domain',
    validation: 'validation',
  },
}
