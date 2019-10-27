/**
 * @file http/routes/health.js
 * @overview healthcheck router
 */

const config = require('config')
const Router = require('koa-router')

module.exports = function createRouter() {
  async function get(ctx) {
    ctx.body = { meta: { status: 'healthy' } }
    ctx.status = 200
  }

  const { namespace } = config.get('api')
  const router = new Router({ prefix: `/${namespace}/health` })

  router.get('/', get)

  return router
}

module.exports.inject = {}
