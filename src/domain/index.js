/**
 * @file domain/index.js
 * @overview domain logic
 * NOTE: this module should be renamed to reflect the actual domain
 */

module.exports = function domain({ repo }) {
  return (correlation) => {
    async function create({ data, requestId, type }) {
      return repo(correlation).create({ data, requestId, type })
    }

    async function destroy({ id, requestId, type }) {
      return repo(correlation).destroy({ id, requestId, type })
    }

    async function detail({ id, requestId, type }) {
      return repo(correlation).get({ id, requestId, type })
    }

    async function list({ filters, page, requestId, sort, type }) {
      return repo(correlation).list({ filters, page, requestId, sort, type })
    }

    async function update({ data, requestId, type }) {
      return repo(correlation).update({ data, requestId, type })
    }

    return { create, destroy, detail, list, update }
  }
}

module.exports.inject = {
  name: 'domain',
  require: {
    repo: 'repo',
  },
}
