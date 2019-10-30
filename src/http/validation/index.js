/**
 * @file validation/index.js
 * @overview schema validation
 */

const config = require('config')

module.exports = function validation({ core, logger, schemas }) {
  const { ValidationError } = core

  const { enabled, label, level } = config.get('logger.validation')

  return (correlation) => {
    const { req_id } = correlation
    const log = logger.child({ module: label, req_id, level })
    log.enabled = enabled

    function composeValidationError({ details, messages }) {
      const error = new ValidationError(messages.join(', '))
      error.details = details
      return error
    }

    function formatBasicValidationErrors({ error }) {
      if (!error || !error.isJoi || !Array.isArray(error.details)) {
        throw new Error('unknown validation error')
      }
      return error.details.reduce((memo, detail) => {
        const { message, path } = detail
        memo.messages.push(message)
        const data = {
          status: 400,
          source: { pointer: path.map((p) => `/${p}`).join('') },
          title: error.name,
          detail: message,
        }
        memo.details.push(data)
        return memo
      }, { details: [], messages: [] })
    }

    function throwOnInvalid({ errors }) {
      if (errors.details.length) {
        const err = composeValidationError(errors)
        if (log.enabled === 'true') log.error(`${err.message}`)
        throw err
      }
    }

    function validateBody({ body, method, type }) {
      const schema = schemas.bodySchema({ method, type })
      const options = { abortEarly: false }
      const { error } = schema.validate(body, options)

      const errors = error
        ? formatBasicValidationErrors({ error })
        : { details: [], messages: [] }
      throwOnInvalid({ log, errors })
    }

    function validateQuery({ query, type }) {
      const schema = schemas.querySchema({ type })
      const options = { abortEarly: false }
      const { error } = schema.validate(query, options)

      const errors = error
        ? formatBasicValidationErrors({ error })
        : { details: [], messages: [] }
      throwOnInvalid({ errors })
    }

    return {
      composeValidationError,
      formatBasicValidationErrors,
      validateBody,
      validateQuery,
    }
  }
}

module.exports.inject = {
  name: 'validation',
  require: {
    core: 'core',
    logger: 'logger',
    schemas: 'http/validation/schemas/index',
  },
}
