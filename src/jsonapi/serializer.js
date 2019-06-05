const transformalizer = require('./transformalizer')

module.exports = { createSerializer }

/**
 * Registers schema by name and returns an object with a serialize method
 * @param  {String} options.name   - schema name
 * @param  {Object} options.schema - schema
 * @return {Object}
 */
function createSerializer({ name, schema }) {
  transformalizer.register({ name, schema })

  /**
   * Serialize source data into a valid JSON API document
   * @param  {Object} params         - parameters
   * @param  {Object} params.source  - source data
   * @param  {Object} params.options - serializer options
   * @return {Object}
   */
  function serialize({ source, options }) {
    const data = serializeData({ source, options })
    return { jsonapi: { version: '1.0' }, data }
  }

  /**
   * Serialize source data into a valid JSON API data resource
   * @param  {Object} params         - parameters
   * @param  {Object} params.source  - source data
   * @param  {Object} params.options - serializer options
   * @return {Object}
   */
  function serializeData({ source, options }) {
    return transformalizer.transformData({
      docSchema: transformalizer.getSchema({ name }),
      source,
      data: source,
      options,
    })
  }

  return { serialize }
}

module.exports.inject = { }
