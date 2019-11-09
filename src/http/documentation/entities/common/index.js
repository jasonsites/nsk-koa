/**
 * @file http/documentation/entities/common/index.js
 * @overview api documentation common
 */

module.exports = function common({ schemas }) {
  return { schemas }
}

module.exports.inject = {
  require: {
    schemas: 'http/documentation/entities/common/schemas',
  },
}
