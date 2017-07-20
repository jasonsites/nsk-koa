
module.exports = function createAddRequestLogger({ logger, requestId }) {
  return function addRequestLogger(ctx, next) {
    const id = ctx.get(requestId || 'test-request-id')
    ctx.request.log = logger.child({ req_id: id })
    return next()
  }
}

module.exports.inject = { type: 'object' }
