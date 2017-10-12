const { badRequest } = require('boom')
const joi = require('joi')

/**
 * Create joi validation schema for POST/PATCH request bodies
 * @param  {String} method - http request method
 * @return {Object}
 */
function generateSchema(method) {
  const dataTypes = [joi.boolean(), joi.number()]
  if (method === 'PATCH') dataTypes.push(joi.string().allow(null))
  else dataTypes.push(joi.string())

  return joi.object({
    jsonapi: joi.object({
      version: joi.string(),
    }).required(),
    meta: joi.object({
      // no restrictions on field names
    }).unknown(true),
    data: joi.object({
      type: joi.string().valid('entity').required(),
      id: joi.string().required(),
      attributes: joi.object({
        feature: joi.object({
          // no restrictions on field names
        }).required()
          .pattern(/.*/g, joi.alternatives(dataTypes)),
      }).required(),
    }).required(),
  })
}

module.exports = function createValidator() {
  function validate({ body, method }) {
    try {
      const schema = generateSchema(method)
      return joi.attempt(body, schema)
    } catch (err) {
      const msg = Array.isArray(err.details)
        ? err.details.map(detail => detail.message).join(', ')
        : ''
      throw badRequest(`Invalid request body: ${msg}`)
    }
  }

  return { validate }
}

module.exports.inject = {
  name: 'validation',
}
