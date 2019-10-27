/**
 * @file validation/schemas/domain.js
 * @overview domain schemas
 */

const joi = require('@hapi/joi')

module.exports = function domain({ common, core }) {
  const { single } = common

  /**
   * example domain entity schema
   */
  function type({ method }) {
    // TODO: possible error handling on undefined `method`
    const entity = {
      type: joi.string().valid(core.Entity.DomainEntity).required(),
      properties: joi.object().keys({
        name: joi.string().required(),
      }).required(),
    }
    if (method === 'PUT') entity.id = joi.string().uuid().required()
    return entity
  }

  return single({ type })
}

module.exports.inject = {
  require: {
    common: 'http/validation/schemas/body/common',
    core: 'core',
  },
}
