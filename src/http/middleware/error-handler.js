/**
 * @file http/middleware/error-handler.js
 * @overview http error handler
 */

const { badRequest, boomify, forbidden, notFound, unauthorized } = require('@hapi/boom')

module.exports = function middleware({ core }) {
  const { ErrorType } = core

  function boomifyError(error) {
    switch (error.type) {
      case ErrorType.Forbidden: return forbidden(error)
      case ErrorType.NotFound: return notFound(error)
      case ErrorType.Unauthorized: return unauthorized(error)
      case ErrorType.Validation: return badRequest(error)
      default: {
        const err = boomify(error, { statusCode: 500 })
        err.type = ErrorType.InternalServer
        return err
      }
    }
  }

  return async function errorHandler(ctx, next) {
    try {
      await next()
    } catch (err) {
      const { log } = ctx
      if (log) log.error(err)
      else console.error(err) // eslint-disable-line

      const boomError = boomifyError(err)
      const { details, output, type } = boomError
      const { message, statusCode } = output.payload

      ctx.body = type === ErrorType.Validation && Array.isArray(details)
        ? { errors: details }
        : { errors: [{ status: statusCode, title: type, detail: message }] }
      ctx.status = statusCode
      ctx.state.error = boomError
    }
  }
}

module.exports.inject = {
  require: {
    core: 'core',
  },
}
