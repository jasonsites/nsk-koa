/**
 * @file http/documentation/entities/entity/index.js
 * @overview api documentation entity
 */

module.exports = function documentation({ paths, schemas, tags }) {
  return { paths, schemas, tags }
}

module.exports.inject = {
  require: {
    paths: 'http/documentation/entities/entity/paths',
    schemas: 'http/documentation/entities/entity/schemas',
    tags: 'http/documentation/entities/entity/tags',
  },
}
