const uuid = require('uuid')

module.exports = function createAddRequestLogger({ logger }) {
  return function addRequestLogger(ctx, next) {
    const id = ctx.get('X-REQUEST-ID') || uuid.v4()
    ctx.request.log = logger.child({ req_id: id })
    return next()
  }
}

module.exports.inject = { type: 'object' }
