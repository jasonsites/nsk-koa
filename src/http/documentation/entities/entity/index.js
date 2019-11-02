/**
 * @file http/documentation/entities/entity/index.js
 * @overview api documentation entity
 */

module.exports = function documentation({ paths, schemas, tags }) {
  return {
    paths,
    schemas: { ...schemas.common, ...schemas.entity },
    tags,
  }
}

module.exports.inject = {
  require: {
    paths: 'http/documentation/entities/entity/paths',
    schemas: {
      common: 'http/documentation/entities/entity/schemas/common',
      entity: 'http/documentation/entities/entity/schemas/entity',
    },
    tags: 'http/documentation/entities/entity/tags',
  },
}
