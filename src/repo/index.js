const Bluebird = require('bluebird')
const { notFound } = require('boom')
const { isNull } = require('lodash')

module.exports = function createRepo() {
  function create({ data }) {
    return Bluebird.try(() => ({ attrs: data }))
  }

  async function get({ id }) {
    const result = await Bluebird.try(() => ({ id }))
    if (isNull(result)) {
      throw notFound(`Unable to find resource with id ${id}`)
    }
    return result
  }

  async function destroy({ id }) {
    await Bluebird.try(() => ({ id }))
    return null
  }

  function update({ data }) {
    return Bluebird.try(() => ({ attrs: data }))
  }

  return { create, get, destroy, update }
}

module.exports.inject = {
  name: 'repo',
}
