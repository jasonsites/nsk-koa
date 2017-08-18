const serializers = require('./serializers')

module.exports = { serialize }

/**
 * Serialize one or more resources into a valid JSON API document
 * @param  {String} params.type    - serializer type
 * @param  {Object} params.source  - source document
 * @param  {Object} params.options - options
 * @return {Object}
 */
function serialize({ type, source, options }) {
  return serializers[type].serialize({ source, options })
}

module.exports.inject = {
  name: 'jsonapi',
  type: 'object',
}
