/**
 * @file http/middleware/response-logger.js
 * @overview http response logger
 */

const config = require('config')

module.exports = function middleware() {
  return async function responseLogger(ctx, next) {
    await next()
    const { enabled, level } = config.get('logger.http')
    const { log, response } = ctx
    if (enabled.response === 'true') {
      const { body, header, message, status } = response
      const base = { status, message, header }
      if (level === 'debug') log.debug({ ...base, body })
      else log.info(base)
    }
  }
}

module.exports.inject = {}
