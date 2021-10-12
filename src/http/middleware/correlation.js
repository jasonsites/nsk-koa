/**
 * @file http/middleware/correlation.js
 * @overview composes correlation object from tracing headers
 */

const uuid = require('uuid')

module.exports = function middleware() {
  return async function correlation(ctx, next) {
    const headers = getTracingHeaders(ctx.request)
    const req_id = headers['x-request-id'] || uuid.v4()
    ctx.state = { correlation: { headers, req_id } }
    ctx.response.set('x-request-id', req_id) // omit in service mesh scenario
    return next()
  }

  // https://istio.io/latest/docs/tasks/observability/distributed-tracing/overview/
  function getTracingHeaders(request) {
    const headers = [
      'x-request-id',
      'x-b3-traceid',
      'x-b3-spanid',
      'x-b3-parentspanid',
      'x-b3-sampled',
      'x-b3-flags',
      'x-ot-span-context',
    ]

    return headers.reduce((memo, h) => {
      memo[h] = request.get(h)
      return memo
    }, {})
  }
}

module.exports.inject = {}
