import Router from 'koa-router'

export default function createRouter() {
  async function get(ctx, next) {
    ctx.status = 200
    ctx.body = { meta: { status: 'healthy' } }
    await next()
  }

  const router = new Router({ prefix: '/health' })
  router.get('/', get)

  return router
}

export const inject = { }
