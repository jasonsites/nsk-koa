// const { badRequest } = require('boom')

module.exports = function featureController({ validation }) {
  async function detail(ctx, next) {
    try {
      const data = { data: 'feature data example' }
      ctx.body = data
      ctx.status = 200
      await next()
    } catch (err) {
      ctx.status = 500
      throw err
    }
  }

  return { detail }
}

module.exports.inject = {
  require: {
    validation: 'validation',
  },
}
