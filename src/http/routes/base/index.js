import Router from 'koa-better-router'
import example from '../../../example'
// import errorHandler from '../middleware/error-handler'

export default function routes() {
  console.log('Registering routes')
  const router = Router({ prefix: '' }).loadMethods()

  router.get('/', async (ctx, next) => {
    ctx.status = 200
    ctx.body = { data: 'It works' }
    await next()
  })

  router.get('/example', async (ctx, next) => {
    try {
      const data = await example()
      ctx.status = 200
      ctx.body = data
      await next()
    } catch (err) {
      console.error(err)
      ctx.status = 500
    }
  })

  console.log('Routes registered')
  return router.middleware()
}
