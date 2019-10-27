/**
* @file repo/db/queries/destroy.js
* @overview repository db destroy queries
*/

const Bluebird = require('bluebird')

module.exports = function destroy({ core, db }) {
  const { Entity } = core

  async function executeDefaultDestroyQuery({ id, log, type }) {
    try {
      const model = db.models.getModel({ method: 'destroy', type })
      await Bluebird.try(() => model)
      return undefined
    } catch (err) {
      if (log.enabled) log.info(id)
      // TODO: construct friendly error and throw
      throw err
    }
  }

  function executeQueryForType(params) {
    const { type } = params
    switch (type) {
      case Entity.DomainEntity: return executeDefaultDestroyQuery(params)
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
