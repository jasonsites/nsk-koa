const { badRequest } = require('boom')
const joi = require('joi')

module.exports = function createValidator() {
  // jsonapi POST/PATCH request schema
  const schema = joi.object({
    jsonapi: joi.object({
      version: joi.string(),
    }).required(),
    meta: joi.object({
      // no restrictions on field names
    }).unknown(true),
    data: joi.object({
      type: joi.string().valid('feature').required(),
      id: joi.string().required(),
      attributes: joi.object({
        feature: joi.object({
          // no restrictions on field names
          // values must be scalar
        }).required()
          .pattern(/.*/g, joi.any().invalid([joi.array(), joi.object()])),
      }).required(),
    }).required(),
  })

  function validate(body) {
    try {
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
