import Router from 'koa-router'

export default function createRouter() {
  async function get(ctx, next) {
    ctx.status = 200
    ctx.body = { data: 'base router is working....' }
    await next()
  }

  const router = new Router()
  router.get('/', get)

  return router
}

export const inject = { }
