/**
 * @file validation/schemas/index.js
 * @overview schemas
 */

const joi = require('@hapi/joi')

module.exports = { entitySchema }

/**
 * Create joi validation schema for POST/PATCH request bodies
 * @param  {String} method - http request method
 * @return {Object}
 */
function entitySchema(method) {
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
        domain: joi.object({
          // no restrictions on field names
        }).required()
          .pattern(/.*/, joi.alternatives(dataTypes)),
      }).required(),
    }).required(),
  })
}

module.exports.inject = { }
