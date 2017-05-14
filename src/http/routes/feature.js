import Router from 'koa-better-router'

export default function routes(feature) {
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

  const router = Router({ prefix: '' }).loadMethods()
  router.get('/feature', get)

  return router.middleware()
}

export const inject = {
  require: ['feature/index'],
}
