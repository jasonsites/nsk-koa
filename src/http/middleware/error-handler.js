/* eslint-disable no-unused-vars */
const { wrap } = require('boom')

module.exports = async function errorHandler(ctx, next) {
  try {
    await next()
  } catch (err) {
    if (ctx.request.log) ctx.request.log.error(err)
    else console.error(err)
    if (!err.isBoom) wrap(err, 500)
    ctx.status = err.output.payload.statusCode
    ctx.state.error = err
  }
}

module.exports.inject = { type: 'object' }
