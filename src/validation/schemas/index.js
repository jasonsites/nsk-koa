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
    domain: joi.object({}).unknown(true),
  })
}

module.exports.inject = { }
