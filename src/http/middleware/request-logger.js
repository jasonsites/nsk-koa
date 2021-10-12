/**
 * @file http/middleware/request-logger.js
 * @overview http request logger
 */

const config = require('config')

module.exports = function middleware({ logger }) {
  const { enabled, label, level } = config.get('logger.http')

  return async function requestLogger(ctx, next) {
    const { ip, request, state } = ctx
    const { correlation: { req_id } } = state
    ctx.log = logger.child({ module: label, req_id, ip, level })
    if (enabled.request === 'true') {
      const { body, headers, method, url } = request
      const base = { headers, method, url }
      if (level === 'debug') ctx.log.debug({ body, ...base })
      else ctx.log.info(base)
    }
    return next()
  }
}

module.exports.inject = {
  require: {
    logger: 'logger',
  },
}
