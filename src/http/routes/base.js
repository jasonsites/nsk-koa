/**
 * @file http/routes/base.js
 * @overview root (`/`) router
 */

const Router = require('koa-router')

module.exports = function createRouter() {
  async function get(ctx) {
    ctx.body = { data: 'base router is working....' }
    ctx.status = 200
  }

  const router = new Router()
  router.get('/', get)

  return router
}

module.exports.inject = {}
