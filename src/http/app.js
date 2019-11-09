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
      const { port } = config.get('api')
      app.server = app.listen(port)
      logger.info(`application listening on port: ${port}`)
    } catch (error) {
      console.error('error starting application', error)// eslint-disable-line
      throw error
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
