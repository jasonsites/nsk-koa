import { notImplemented, methodNotAllowed } from 'boom'
import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'

export default function createRouter({ config, logger, middleware, routes }) {
  function configureMiddleware(app) {
    app.use(compress())
    app.use(bodyParser({
      extendTypes: { json: ['application/vnd.api+json'] },
    }))
    app.use(middleware.requestLogger({ logger, requestId: config.get('requestId') }))
    app.use(async (ctx, next) => {
      const { request: { ip, path } } = ctx
      logger.info(`Request from ${ip} for ${path}`)
      await next()
    })
    app.use(middleware.errorHandler)
  }

  function registerRoutes(app) {
    routes.forEach((router) => {
      app.use(router.routes())
      app.use(router.allowedMethods({
        notImplemented: () => notImplemented(),
        methodNotAllowed: () => methodNotAllowed(),
      }))
    })
  }

  return { configureMiddleware, registerRoutes }
}

export const inject = {
  require: {
    config: 'config/index',
    logger: 'logger/index',
    middleware: {
      errorHandler: 'http/middleware/error-handler',
      requestLogger: 'http/middleware/request-logger',
    },
    routes: 'any!^http/routes/.+',
  },
}
