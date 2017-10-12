const config = require('config')
const uuid = require('uuid')

module.exports = function addRequestLogger({ logger }) {
  return function requestLogger(ctx, next) {
    const { request: { debug, level } } = config.get('logger')
    const { ip, request } = ctx
    const requestId = ctx.get('X-REQUEST-ID') || uuid.v4()
    request.log = logger.child({ ip, level, req_id: requestId })
    request.log.info(serializeRequest({ debug, request }))
    return next()
  }

  function serializeRequest({ debug = false, request }) {
    const { body, headers, method, url } = request
    if (debug) return { body, headers, method, url }
    return { headers, method, url }
  }
}

module.exports.inject = { type: 'object' }
