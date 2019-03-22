/**
 * @file http/middleware/response-logger.js
 * @overview http response logger
 */

const config = require('config')

module.exports = function addResponseLogger({ logger }) {
  return async function responseLogger(ctx, next) {
    await next()
    const { response: { active, debug, level } } = config.get('logger')
    const { ip, response } = ctx
    const requestId = response.get('X-Request-ID')
    const log = logger.child({ ip, level, req_id: requestId })
    if (active) log.info(serializeResponse({ debug, response }))
  }

  function serializeResponse({ debug = false, response }) {
    const { body, header, message, status } = response
    if (debug) return { status, message, header, body }
    return { status, message, header }
  }
}

module.exports.inject = { type: 'object' }
