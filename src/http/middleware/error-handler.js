/**
 * @file http/middleware/error-handler.js
 * @overview http error handler
 */

const { boomify } = require('boom')

module.exports = async function errorHandler(ctx, next) {
  try {
    await next()
  } catch (err) {
    const { log } = ctx
    if (log) log.error(err)
    else console.error(err)
    if (!err.isBoom) boomify(err, { statusCode: 500 })
    const { error, message, statusCode } = err.output.payload
    ctx.body = {
      errors: [{
        title: error,
        detail: message,
        status: statusCode.toString(),
        meta: err.data,
      }],
    }
    ctx.status = statusCode
    ctx.state.error = err
  }
}

module.exports.inject = { type: 'object' }
