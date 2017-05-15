import Koa from 'koa'

import container from './container'

const app = new Koa()

export async function start() {
  try {
    const [config, logger, router] = await container.load('config/index', 'logger/index', 'http/router')
    router.configureMiddleware(app)
    router.registerRoutes(app)
    const port = config.get('port')
    app.server = app.listen(port)
    logger.info(`Application listening on port: ${port}`)
  } catch (err) {
    console.error('Error starting application', err)
    throw err
  }
}

export default app
