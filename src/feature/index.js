const Bluebird = require('bluebird')

module.exports = function feature() {
  async function create({ data }) {
    // replace with business logic
    return Bluebird.try(() => ({ attrs: data }))
  }

  async function destroy({ id }) {
    // replace with business logic
    return Bluebird.try(() => ({ id }))
  }

  async function detail({ id }) {
    // replace with business logic
    const data = { id, key1: 'val1', key2: 'val2' }
    return Bluebird.try(() => ({ attrs: data }))
  }

  async function update({ data }) {
    // replace with business logic
    return Bluebird.try(() => ({ attrs: data }))
  }

  return { create, destroy, detail, update }
}

module.exports.inject = {
  name: 'feature',
}
