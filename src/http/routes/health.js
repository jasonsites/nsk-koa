/**
 * @file http/routes/health.js
 * @overview healthcheck router
 */

const Router = require('koa-router')

module.exports = function createRouter() {
  async function get(ctx) {
    ctx.status = 200
    ctx.body = { meta: { status: 'healthy' } }
  }

  const router = new Router({ prefix: '/health' })
  router.get('/', get)

  return router
}

module.exports.inject = {}
