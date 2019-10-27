/**
 * @file http/router.js
 * @overview http middleware and router configuration
 */

const { notImplemented, methodNotAllowed } = require('boom')
const koaBody = require('koa-body')
const compress = require('koa-compress')

module.exports = function createRouter({ middleware, routes }) {
  function configureMiddleware(app) {
    app.use(middleware.errorHandler)
    app.use(middleware.responseTime)
    app.use(koaBody({ includeUnparsed: true }))
    app.use(middleware.requestLogger)
    app.use(middleware.responseLogger)
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
    middleware: {
      errorHandler: 'http/middleware/error-handler',
      requestLogger: 'http/middleware/request-logger',
      responseLogger: 'http/middleware/response-logger',
      responseTime: 'http/middleware/response-time',
    },
    routes: 'any!^http/routes/.+',
  },
}
