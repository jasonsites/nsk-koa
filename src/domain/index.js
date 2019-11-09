/**
 * @file domain/index.js
 * @overview domain logic
 * NOTE: this module should be renamed to reflect the actual domain
 */

module.exports = function domain({ repo }) {
  return {
    context: (correlation) => {
      const repository = repo.context(correlation)

      async function create({ data, type }) {
        return repository.create({ data, type })
      }

      async function destroy({ id, type }) {
        return repository.destroy({ id, type })
      }

      async function detail({ id, type }) {
        return repository.get({ id, type })
      }

      async function list({ filters, page, sort, type }) {
        return repository.list({ filters, page, sort, type })
      }

      async function update({ data, type }) {
        return repository.update({ data, type })
      }

      return { create, destroy, detail, list, update }
    },
  }
}

module.exports.inject = {
  name: 'domain',
  require: {
    repo: 'repo',
  },
}
