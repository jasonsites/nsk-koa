/**
 * @file serializers/domain.js
 * @overview domain serializer
 */

module.exports = function domainSerializer() {
  function buildDomain({ data }) {
    return data
  }

  return { buildDomain }
}

module.exports.inject = {}
