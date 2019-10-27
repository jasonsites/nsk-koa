/**
 * @file core/index.js
 * @overview common structures to be used across layers
 */

module.exports = function core({ errors }) {
  const Entity = {
    Domain: 'domain',
  }

  return { Entity, ...errors }
}

module.exports.inject = {
  name: 'core',
  require: {
    errors: 'core/errors',
  },
}
