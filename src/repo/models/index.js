/**
* @file repo/models/index.js
* @overview repository models
*/

module.exports = function index({ core, models }) {
  const { Resource } = core

  function getModel({ log, type }) {
    switch (type) {
      case Resource.DomainResource: return models.domainResource({ log })
      default: throw new Error(`invalid resource type '${type}'`)
    }
  }

  return { getModel }
}

module.exports.inject = {
  require: {
    core: 'core',
    models: {
      domainResource: 'repo/models/domain-resource',
    },
  },
}
