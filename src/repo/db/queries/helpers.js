/**
 * @file repo/db/queries/helpers.js
 * @overview repository db helpers
 */

module.exports = function helpers({ core }) {
  const { NotFoundError } = core

  function composePagingData({ count, limit, offset }) {
    return { limit, offset, total: count }
  }

  function throwOnNotFound({ id, record }) {
    if (!record) {
      throw new NotFoundError(`unable to find resource with id '${id}'`)
    }
  }

  return {
    composePagingData,
    throwOnNotFound,
  }
}

module.exports.inject = {
  require: {
    core: 'core',
  },
}
