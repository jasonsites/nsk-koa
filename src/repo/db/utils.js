/**
 * @file repo/db/utils.js
 * @overview repository db utilities
 */

module.exports = function utils({ core }) {
  const { NotFoundError } = core

  function sanitizeFilters({ filters }) {
    return filters
  }

  function throwOnNotFound({ id, record }) {
    if (!record) {
      throw new NotFoundError(`unable to find resource with id '${id}'`)
    }
  }

  return { sanitizeFilters, throwOnNotFound }
}

module.exports.inject = {
  require: {
    core: 'core',
  },
}
