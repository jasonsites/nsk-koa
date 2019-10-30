/**
 * @file repo/index.js
 * @overview repository
 */

const config = require('config')

module.exports = function repository({ db, logger }) {
  const { enabled, label, level } = config.get('logger.repo')

  return (correlation) => {
    const { req_id } = correlation
    const log = logger.child({ module: label, req_id, level })
    log.enabled = enabled

    async function create({ data, type }) {
      const record = await db.queries.create.executeQueryForType({ data, log, type })
      if (log.enabled) log.info(record)
      return record
    }

    async function destroy({ id, type }) {
      const record = await db.queries.destroy.executeQueryForType({ id, log, type })
      if (log.enabled) log.info(record)
      return null
    }

    async function get({ id, type }) {
      const record = await db.queries.detail.executeQueryForType({ id, log, type })
      if (log.enabled) log.info(record)
      db.utils.throwOnNotFound({ id, record })
      return record
    }

    async function list(params) {
      const { page, sort, type } = params
      let { filters } = params
      filters = db.utils.sanitizeFilters({ filters })
      const record = await db.queries.list
        .executeQueryForType({ filters, log, page, sort, type })
      if (log.enabled) log.info(record)
      return null
    }

    async function update({ data, type }) {
      const record = await db.queries.update.executeQueryForType({ data, log, type })
      if (log.enabled) log.info(record)
      return record
    }

    return { create, get, destroy, list, update }
  }
}

module.exports.inject = {
  name: 'repo',
  require: {
    db: {
      queries: {
        create: 'repo/db/queries/create',
        destroy: 'repo/db/queries/destroy',
        detail: 'repo/db/queries/detail',
        list: 'repo/db/queries/list',
        update: 'repo/db/queries/update',
      },
      utils: 'repo/db/utils',
    },
    logger: 'logger',
  },
}
