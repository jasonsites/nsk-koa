/**
 * @file validation/schemas/index.js
 * @overview validation schemas
 */

const { domain } = require('./body/domain')

module.exports = { bodySchema }

/**
 * retrieve joi validation schema for POST/PATCH request bodies
 * @param  {String} params.method - http request method
 * @param  {String} params.type   - entity type
 * @return {Object}
 */
function bodySchema({ core, method, type }) {
  const { Entity } = core
  switch (type) {
    case Entity.Domain: return domain({ core, method })
    default: throw new Error(`invalid schema type '${type}'`)
  }
}
