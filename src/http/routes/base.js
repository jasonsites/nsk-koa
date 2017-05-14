import Router from 'koa-better-router'

export default function routes() {
  async function get(ctx, next) {
    ctx.status = 200
    ctx.body = { data: 'It works' }
    await next()
  }

  const router = Router({ prefix: '' }).loadMethods()
  router.get('/', get)

  return router.middleware()
}
