/**
* @file repo/db/queries/detail.js
* @overview repository db detail queries
*/

const Bluebird = require('bluebird')

module.exports = function detail({ core }) {
  const { Entity } = core

  async function executeDefaultDetailQuery({ id, log, type }) {
    try {
      const record = await Bluebird.try(() => ({ type, id }))
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
      case Entity.DomainEntity: return executeDefaultDetailQuery(params)
      default: throw new Error(`invalid entity type '${type}'`)
    }
  }

  return { executeQueryForType }
}

module.exports.inject = {
  require: {
    core: 'core',
    db: {
      queries: {
        helpers: 'repo/db/queries/helpers',
      },
      utils: 'repo/db/utils',
    },
  },
}
