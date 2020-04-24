/**
 * @file domain/serializers/types.js
 * @overview
 */

module.exports = function types() {
  function serializeDomainResource({ id, meta, properties, type }) {
    return { type, id, meta, properties }
  }

  return { serializeDomainResource }
}

module.exports.inject = {}
