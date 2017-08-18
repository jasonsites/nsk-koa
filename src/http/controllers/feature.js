const { get } = require('lodash')

module.exports = function featureController({ feature, jsonapi, validation }) {
  async function create(ctx, next) {
    try {
      const { body } = ctx.request
      validation.validate(body)
      const data = extractData({ body })
      const doc = await feature.create({ data })
      ctx.body = jsonapi.serialize({
        type: 'feature',
        source: doc.attrs,
        options: {},
      })
      ctx.status = 201
      ctx.type = 'application/vnd.api+json'
      await next()
    } catch (err) {
      ctx.status = 500
      throw err
    }
  }

  async function destroy(ctx, next) {
    try {
      const { id } = ctx.params
      await feature.destroy({ id })
      ctx.status = 204
      await next()
    } catch (err) {
      ctx.status = 500
      throw err
    }
  }

  async function detail(ctx, next) {
    try {
      const { id } = ctx.params
      const doc = await feature.detail({ id })
      ctx.body = jsonapi.serialize({
        type: 'feature',
        source: doc.attrs,
        options: {},
      })
      ctx.status = 200
      ctx.type = 'application/vnd.api+json'
      await next()
    } catch (err) {
      ctx.status = 500
      throw err
    }
  }

  function extractData({ body, id }) {
    const prefs = get(body, 'data.attributes.feature')
    return Object.assign({}, { id: id || get(body, 'data.id') }, prefs)
  }

  async function update(ctx, next) {
    try {
      const { id } = ctx.params
      const { body } = ctx.request
      validation.validate(body)
      // TODO: validate that params id matches body id
      const data = extractData({ body, id })
      await feature.update({ data })
      ctx.status = 204
      await next()
    } catch (err) {
      ctx.status = 500
      throw err
    }
  }

  return { create, destroy, detail, update }
}

module.exports.inject = {
  require: {
    feature: 'feature',
    jsonapi: 'jsonapi',
    validation: 'validation',
  },
}
