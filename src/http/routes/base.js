/**
 * @file http/routes/base.js
 * @overview root (`/`) router
 */

const config = require('config')
const Router = require('koa-router')

module.exports = function createRouter() {
  async function get(ctx) {
    ctx.body = { data: 'base router is working....' }
    ctx.status = 200
  }

  const { namespace } = config.get('api')
  const router = new Router({ prefix: `/${namespace}` })

  router.get('/', get)

  return router
}

module.exports.inject = {}
