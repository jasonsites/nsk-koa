/**
* @file repo/models/domain-resource.js
* @overview domain resource model
*/

// const Bluebird = require('bluebird')

module.exports = function model({ core }) {
  const { Resource } = core

  return function performanceSummaryUser({ log }) {
    const type = Resource.DomainResource

    async function detail({ id }) {
      log.info(id)

      const meta = { context: 'example' }
      const properties = { name: 'example' }

      return {
        data: [{
          type,
          id: parseInt(id, 10),
          meta,
          properties,
        }],
      }
    }

    return { detail, type }
  }
}

module.exports.inject = {
  require: {
    core: 'core',
    entities: {
      dbEntity: 'repo/entities/db-entity',
    },
  },
}
