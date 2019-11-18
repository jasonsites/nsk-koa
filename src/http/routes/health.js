/**
 * @file http/routes/health.js
 * @overview healthcheck router
 */

const config = require('config')
const Router = require('@koa/router')

module.exports = function createRouter() {
  const { namespace } = config.get('api')
  const router = new Router({ prefix: `/${namespace}/health` })

  async function status(ctx) {
    ctx.body = { meta: { status: 'healthy' } }
    ctx.status = 200
  }

  router.get('/', status)

  return router
}

module.exports.inject = {}
