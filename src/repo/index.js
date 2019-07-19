/**
 * @file repo/index.js
 * @overview repository
 */

const Bluebird = require('bluebird')
const { notFound } = require('boom')
const config = require('config')
const { isNull } = require('lodash')

module.exports = function createRepo({ log }) {
  const { active } = config.get('logger.repo')

  async function create({ data }) {
    const result = await Bluebird.try(() => data)
    if (active) log.info(result)
    return result
  }

  async function get({ id }) {
    const result = await Bluebird.try(() => ({ id }))
    if (active) log.info(result)
    if (isNull(result)) {
      throw notFound(`Unable to find resource with id ${id}`)
    }
    return result
  }

  async function destroy({ id }) {
    const result = await Bluebird.try(() => ({ id }))
    if (active) log.info(result)
    return null
  }

  async function update({ data }) {
    const result = await Bluebird.try(() => data)
    if (active) log.info(result)
    return result
  }

  return { create, get, destroy, update }
}

module.exports.inject = {
  name: 'repo',
  require: {
    log: 'logger',
  },
}
