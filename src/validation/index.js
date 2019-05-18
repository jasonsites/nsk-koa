/**
 * @file validation/index.js
 * @overview schema validation
 */

const { badRequest } = require('boom')
const config = require('config')
const joi = require('@hapi/joi')

const { entitySchema } = require('./schemas')

module.exports = function createValidator({ logger }) {
  const { active, label, level } = config.get('logger.validation')
  const log = logger.child({ level, service: label })

  function validate({ body, method }) {
    try {
      const schema = entitySchema(method)
      return joi.attempt(body, schema)
    } catch (error) {
      const message = Array.isArray(error.details)
        ? error.details.map(detail => detail.message).join(', ')
        : error.message
      if (active) log.error(`'${message}'`)
      throw badRequest(`${message}`)
    }
  }
  return { validate }
}

module.exports.inject = {
  name: 'validation',
  require: {
    logger: 'logger',
  },
}
