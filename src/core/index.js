/**
 * @file core/index.js
 * @overview common structures to be used across layers
 */

module.exports = function core({ errors }) {
  const Resource = {
    DomainResource: 'domain_resource',
  }

  return { ...errors, Resource }
}

module.exports.inject = {
  name: 'core',
  require: {
    errors: 'core/errors',
  },
}
