const Router = require('koa-router')

module.exports = function createRouter({ controller }) {
  const { detail } = controller

  const router = new Router({ prefix: '/feature' })
  router.get('/', detail)

  return router
}

module.exports.inject = {
  require: {
    controller: 'http/controllers/feature',
  },
}
