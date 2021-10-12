/**
 * @file http/router.js
 * @overview http middleware and router configuration
 */

const { notImplemented, methodNotAllowed } = require('@hapi/boom')
const koaBody = require('koa-body')
const compress = require('koa-compress')
const helmet = require('koa-helmet')

module.exports = function createRouter({ middleware, routes }) {
  function configureMiddleware(app) {
    app.use(compress())
    app.use(middleware.responseLogger)
    app.use(middleware.responseTime)
    app.use(helmet())
    app.use(middleware.errorHandler)
    app.use(koaBody({ includeUnparsed: true }))
    app.use(middleware.correlation)
    app.use(middleware.requestLogger)
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
      correlation: 'http/middleware/correlation',
      errorHandler: 'http/middleware/error-handler',
      requestLogger: 'http/middleware/request-logger',
      responseLogger: 'http/middleware/response-logger',
      responseTime: 'http/middleware/response-time',
    },
    routes: 'any!^http/routes/.+',
  },
}
