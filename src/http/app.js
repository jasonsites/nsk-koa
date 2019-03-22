/**
 * @file http/app.js
 * @overview http server
 */

const config = require('config')
const Koa = require('koa')

module.exports = function createApp({ logger, router }) {
  const app = new Koa()

  app.initialize = async function start() {
    try {
      router.configureMiddleware(app)
      router.registerRoutes(app)
      const port = config.get('api.local.port')
      app.server = app.listen(port)
      logger.info(`Application listening on port: ${port}`)
    } catch (err) {
      console.error('Error starting application', err)
      throw err
    }
  }

  return app
}

module.exports.inject = {
  init: 'initialize',
  require: {
    logger: 'logger',
    router: 'http/router',
  },
}
