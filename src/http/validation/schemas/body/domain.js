/**
 * @file validation/schemas/domain.js
 * @overview domain schemas
 */

const joi = require('joi')

module.exports = function domain({ common, core }) {
  const { single } = common

  /**
   * example domain resource schema
   */
  function type({ method }) {
    // TODO: possible error handling on undefined `method`
    const resource = {
      type: joi.string().valid(core.Resource.DomainResource).required(),
      properties: joi.object().keys({
        name: joi.string().required(),
      }).required(),
    }
    if (method === 'PUT') resource.id = joi.string().uuid().required()
    return resource
  }

  return single({ type })
}

module.exports.inject = {
  require: {
    common: 'http/validation/schemas/body/common',
    core: 'core',
  },
}
