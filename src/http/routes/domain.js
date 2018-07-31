const Router = require('koa-router')

module.exports = function createRouter({ controller }) {
  const { create, destroy, detail, update } = controller

  const router = new Router({ prefix: '/domain' })
  router.get('/:id', detail)
  router.post('/', create)
  router.patch('/:id', update)
  router.delete('/:id', destroy)

  return router
}

module.exports.inject = {
  require: {
    controller: 'http/controllers/domain',
  },
}
