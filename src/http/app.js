import Koa from 'koa'
import logger from 'koa-bunyan-logger'

// import middleware from './middleware'
import { baseRouter } from './routes'

const app = new Koa()

app
  .use(logger())
  .use(async (ctx, next) => {
    const { log, path, request } = ctx
    log.info(`Request from ${request.ip} for ${path}`)
    await next()
  })
  .use(baseRouter())
  .use(async (ctx) => { ctx.status = 404 })

export default app
