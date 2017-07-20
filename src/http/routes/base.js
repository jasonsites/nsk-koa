const Router = require('koa-router')

module.exports = function createRouter() {
  async function get(ctx, next) {
    ctx.status = 200
    ctx.body = { data: 'base router is working....' }
    await next()
  }

  const router = new Router()
  router.get('/', get)

  return router
}

module.exports.inject = { }
