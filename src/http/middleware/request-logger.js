/**
 * @file http/middleware/request-logger.js
 * @overview http request logger
 */

const config = require('config')
const uuid = require('uuid')

module.exports = function middleware({ logger }) {
  return async function requestLogger(ctx, next) {
    const { enabled, label, level } = config.get('logger.http')
    const { ip, request } = ctx
    const requestId = ctx.request.get('X-Request-ID') || uuid.v4()
    ctx.response.set('X-Request-ID', requestId)
    ctx.log = logger.child({ ip, module: label, level, req_id: requestId })
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
