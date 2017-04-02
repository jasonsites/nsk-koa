import compose from 'koa-compose'
import Router from 'koa-router'
import example from '../controllers/example'
// import errorHandler from '../middleware/error-handler'

export default function routes() {
  console.log('Registering routes')

  const router = new Router({ prefix: '' })

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
  return compose([router.routes(), router.allowedMethods()])
}
