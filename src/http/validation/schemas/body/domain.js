/**
 * @file validation/schemas/domain.js
 * @overview domain schemas
 */

const joi = require('@hapi/joi')

const { single } = require('./common')

module.exports = { domain: single({ type }) }

/**
 * example domain entity schema
 */
function type({ core, method }) {
  // TODO: possible error handling on undefined `method`
  const entity = {
    type: joi.string().valid(core.Entity.Domain).required(),
    properties: joi.object().keys({
      name: joi.string().required(),
    }).required(),
  }
  if (method === 'PUT') entity.id = joi.string().uuid().required()
  return entity
}
