/**
 * @file validation/index.js
 * @overview schema validation
 */

const config = require('config')
const joi = require('@hapi/joi')

module.exports = function validation({ core, logger, schemas }) {
  const { ValidationError } = core

  return ({ req_id }) => {
    const { enabled, label, level } = config.get('logger.validation')
    const log = logger.child({ level, module: label, req_id })
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
      const schema = schemas.querySchema({ core, type })
      const options = { abortEarly: false }
      const { error } = joi.validate(query, schema, options)

      const errors = error !== null
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
