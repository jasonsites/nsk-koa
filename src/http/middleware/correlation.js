/**
 * @file http/middleware/correlation.js
 * @overview composes correlation object from tracing headers
 */

const config = require('config')

module.exports = function middleware() {
  const tracing = config.get('api.tracing')

  return async function correlation(ctx, next) {
    const headers = getTracingHeaders(ctx.request)
    const req_id = headers['x-request-id']
    ctx.state = { correlation: { headers, req_id } }
    ctx.response.set('X-Request-ID', req_id)
    return next()
  }

  // https://istio.io/latest/docs/tasks/observability/distributed-tracing/overview/
  function getTracingHeaders(request) {
    const { headers } = tracing

    return headers.reduce((memo, h) => {
      memo[h] = request.get(h)
      return memo
    }, {})
  }
}

module.exports.inject = {}
