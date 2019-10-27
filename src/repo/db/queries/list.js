/**
 * @file repo/db/queries/list.js
 * @overview repository db list queries
 */

const Bluebird = require('bluebird')

module.exports = function list({ core, db }) {
  const { Entity } = core

  async function executeDefaultListQuery(params) {
    const { log, page, type } = params
    try {
      // const { filters, sort } = params

      const { limit, offset } = page
      // const { order, prop } = sort

      const records = await Bluebird.try(() => [{ name: 'foo' }, { name: 'bar' }])

      const count = 100
      const data = records.map((record) => ({ type, record }))
      const meta = { paging: db.queries.helpers.composePagingData({ count, limit, offset }) }

      return { data, meta }
    } catch (err) {
      if (log.enabled) log.error(err)
      // TODO: construct friendly error and throw
      throw err
    }
  }

  function executeQueryForType(params) {
    const { type } = params
    switch (type) {
      case Entity.Cycle: return executeDefaultListQuery(params)
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
