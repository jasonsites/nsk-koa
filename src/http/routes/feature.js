const Router = require('koa-router')

module.exports = function createRouter(feature) {
  async function get(ctx, next) {
    try {
      const data = await feature()
      ctx.status = 200
      ctx.body = data
      await next()
    } catch (err) {
      console.error(err)
      ctx.status = 500
    }
  }

  const router = new Router({ prefix: '/feature' })
  router.get('/', get)

  return router
}

module.exports.inject = {
  require: 'feature/index',
}
