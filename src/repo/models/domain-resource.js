/**
* @file repo/models/domain-resource.js
* @overview example domain resource model
*/

module.exports = function model({ core }) {
  const { Resource } = core

  return function domainResource({ log }) {
    const type = Resource.DomainResource

    async function create({ data }) {
      return {
        data: [{
          type,
          id: 1,
          properties: data,
        }],
      }
    }

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

    return { create, detail, type }
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
