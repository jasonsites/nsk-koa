import Router from 'koa-router'

export default function createRouter(feature) {
  async function get(ctx, next) {
    try {
      const data = await feature()
      ctx.status = 200
      ctx.body = data
      await next()
    } catch (err) {
      console.error(err)
      ctx.status = 500
    }
  }

  const router = new Router({ prefix: '' })
  router.get('/feature', get)

  return router
}

export const inject = {
  require: 'feature/index',
}
