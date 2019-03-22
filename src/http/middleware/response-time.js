/**
 * @file http/middleware/response-time.js
 * @overview http response time tracker
 */

module.exports = function addResponseTime() {
  return async function responseTime(ctx, next) {
    const start = Date.now()
    await next()
    const ellapsed = `${Date.now() - start}ms`
    ctx.response.set('X-Response-Time', ellapsed)
  }
}

module.exports.inject = { type: 'object' }
