/**
 * @file serializers/domain.js
 * @overview domain serializer
 */

module.exports = function serializer() {
  function buildDomain({ data }) {
    return data
  }

  return { buildDomain }
}

module.exports.inject = {}
