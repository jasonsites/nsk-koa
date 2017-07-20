const Router = require('koa-router')

module.exports = function createRouter() {
  async function get(ctx, next) {
    ctx.status = 200
    ctx.body = { meta: { status: 'healthy' } }
    await next()
  }

  const router = new Router({ prefix: '/health' })
  router.get('/', get)

  return router
}

module.exports.inject = { }
