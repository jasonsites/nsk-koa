/**
 * @file http/controllers/utils.js
 * @overview controller utilities
 */

const config = require('config')
const qs = require('qs')

module.exports = function utils() {
  function parseQuery(querystring) {
    return qs.parse(querystring)
  }

  function transformQuery(query) {
    const { f = {}, p = {}, s = {} } = query

    const { paging, sorting } = config.get('api')
    const { defaultLimit, defaultOffset } = paging
    const { defaultOrder, defaultProp } = sorting

    let { limit = defaultLimit, offset = defaultOffset } = p
    limit = parseInt(limit, 10)
    offset = parseInt(offset, 10)

    limit = Number.isNaN(limit)
      ? defaultLimit
      : limit

    offset = Number.isNaN(offset)
      ? defaultOffset
      : offset

    const page = { limit, offset }

    let { order = defaultOrder } = s
    order = (order === 'desc' || order === 'asc')
      ? order
      : defaultOrder
    const { prop = defaultProp } = s
    const sort = { order, prop }

    return { filters: f, page, sort }
  }

  return { parseQuery, transformQuery }
}

module.exports.inject = {}
