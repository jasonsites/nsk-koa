/**
 * @file http/router.js
 * @overview http middleware and router configuration
 */

const { notImplemented, methodNotAllowed } = require('boom')
const bodyParser = require('koa-bodyparser')
const compress = require('koa-compress')

module.exports = function createRouter({ logger, middleware, routes }) {
  function configureMiddleware(app) {
    app.use(middleware.errorHandler)
    app.use(middleware.responseTime({ logger }))
    app.use(middleware.requestLogger({ logger }))
    app.use(middleware.responseLogger({ logger }))
    app.use(bodyParser({
      extendTypes: { json: ['application/vnd.api+json'] },
    }))
    app.use(compress())
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
      responseLogger: 'http/middleware/response-logger',
      responseTime: 'http/middleware/response-time',
    },
    routes: 'any!^http/routes/.+',
  },
}
