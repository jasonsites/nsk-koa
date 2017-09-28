const config = require('config')
const uuid = require('uuid')

module.exports = function createAddRequestLogger({ logger }) {
  function serializeRequest(req) {
    const { body, headers, method, url } = req
    if (config.get('debug.request')) {
      return { body, headers, method, url }
    }
    return { headers, method, url }
  }

  return async function addRequestLogger(ctx, next) {
    const { ip } = ctx
    const requestId = ctx.get('X-REQUEST-ID') || uuid.v4()
    const log = logger.child({ ip, req_id: requestId })
    ctx.request.log = log
    log.info(serializeRequest(ctx.request))
    return next()
  }
}

module.exports.inject = { type: 'object' }
