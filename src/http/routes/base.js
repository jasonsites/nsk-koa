const Router = require('koa-router')

module.exports = function createRouter() {
  async function get(ctx) {
    ctx.status = 200
    ctx.body = { data: 'base router is working....' }
  }

  const router = new Router()
  router.get('/', get)

  return router
}

module.exports.inject = {}
