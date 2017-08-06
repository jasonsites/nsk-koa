const { notImplemented, methodNotAllowed } = require('boom')
const bodyParser = require('koa-bodyparser')
const compress = require('koa-compress')

module.exports = function createRouter({ logger, middleware, routes }) {
  function configureMiddleware(app) {
    app.use(compress())
    app.use(bodyParser({
      extendTypes: { json: ['application/vnd.api+json'] },
    }))
    // app.use(middleware.requestLogger({ logger, requestId: config.get('requestId') }))
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

module.exports.inject = {
  require: {
    logger: 'logger',
    middleware: {
      errorHandler: 'http/middleware/error-handler',
      requestLogger: 'http/middleware/request-logger',
    },
    routes: 'any!^http/routes/.+',
  },
}
