/**
 * @file domain/index.js
 * @overview domain logic
 * NOTE: this module should be renamed to reflect the actual domain
 */

module.exports = function domain({ repo }) {
  async function create({ data, type }) {
    return repo.create({ data, type })
  }

  async function destroy({ id, type }) {
    return repo.destroy({ id, type })
  }

  async function detail({ id, type }) {
    return repo.get({ id, type })
  }

  async function list({ filters, page, sort, type }) {
    return repo.list({ filters, page, sort, type })
  }

  async function update({ data, type }) {
    return repo.update({ data, type })
  }

  return { create, destroy, detail, list, update }
}

module.exports.inject = {
  name: 'domain',
  require: {
    repo: 'repo',
  },
}
