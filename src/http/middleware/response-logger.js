/**
 * @file http/middleware/response-logger.js
 * @overview http response logger
 */

const config = require('config')

module.exports = function createMiddleware() {
  return async function responseLogger(ctx, next) {
    await next()
    const { active, debug } = config.get('logger.response')
    const { log, response } = ctx
    if (active) log.info(serializeResponse({ debug, response }))
  }

  function serializeResponse({ debug = false, response }) {
    const { body, header, message, status } = response
    if (debug) return { status, message, header, body }
    return { status, message, header }
  }
}

module.exports.inject = { type: 'object' }
