/**
* @file repo/db/queries/update.js
* @overview repository db update queries
*/

const Bluebird = require('bluebird')

module.exports = function update({ core, db }) {
  const { Entity } = core

  async function executeDefaultUpdateQuery({ data, id, log, type }) {
    try {
      console.log(id)
      const model = db.models.getModel({ data, method: 'update', type })
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
      case Entity.Cycle: return executeDefaultUpdateQuery(params)
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
