/**
* @file repo/db/queries/create.js
* @overview repository db create queries
*/

const Bluebird = require('bluebird')

module.exports = function create({ core, db }) {
  const { Entity } = core

  async function executeDefaultCreateQuery({ data, log, type }) {
    const model = db.models.getModel({ data, method: 'create', type })
    try {
      const record = await Bluebird.try(() => model)
      return { data: [{ type, record }] }
    } catch (err) {
      if (log.enabled) log.error(err)
      // TODO: construct friendly error and throw
      throw err
    }
  }

  function executeQueryForType(params) {
    const { type } = params
    switch (type) {
      case Entity.DomainEntity: return executeDefaultCreateQuery(params)
      default: throw new Error(`invalid entity type '${type}'`)
    }
  }

  return { executeQueryForType }
}

module.exports.inject = {
  require: {
    core: 'core',
    db: {
      models: 'repo/db/models',
    },
  },
}
