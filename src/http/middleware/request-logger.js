/**
 * @file http/middleware/request-logger.js
 * @overview http request logger
 */

const config = require('config')
const uuid = require('uuid')

module.exports = function addRequestLogger({ logger }) {
  return async function requestLogger(ctx, next) {
    const { request: { active, debug, level } } = config.get('logger')
    const { ip, request } = ctx
    const requestId = ctx.request.get('X-Request-ID') || uuid.v4()
    ctx.response.set('X-Request-ID', requestId)
    request.log = logger.child({ ip, level, req_id: requestId })
    if (active) request.log.info(serializeRequest({ debug, request }))
    return next()
  }

  function serializeRequest({ debug = false, request }) {
    const { body, headers, method, url } = request
    if (debug) return { body, headers, method, url }
    return { headers, method, url }
  }
}

module.exports.inject = { type: 'object' }
