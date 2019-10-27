/**
 * @file validation/schemas/index.js
 * @overview validation schemas
 */

module.exports = function schemas({ body, core }) {
  const { domain } = body
  const { Entity } = core

  /**
   * retrieve joi validation schema for POST/PATCH request bodies
   * @param  {String} params.method - http request method
   * @param  {String} params.type   - entity type
   * @return {Object}
   */
  function bodySchema({ method, type }) {
    switch (type) {
      case Entity.DomainEntity: return domain({ method })
      default: throw new Error(`invalid schema type '${type}'`)
    }
  }

  return { bodySchema }
}

module.exports.inject = {
  require: {
    body: {
      domain: 'http/validation/schemas/body/domain',
    },
    core: 'core',
  },
}
