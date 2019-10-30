/**
 * @file http/controllers/utils.js
 * @overview controller utilities
 */

const config = require('config')
const qs = require('qs')

module.exports = function utils() {
  const { paging, sorting } = config.get('api')
  const { defaultLimit, defaultOffset } = paging
  const { defaultOrder, defaultProp } = sorting

  /**
   * @param {object} params.limit
   * @param {object} params.offset
   * @return {object}
   * private
   */
  function pageSettings(params) {
    let { limit = defaultLimit, offset = defaultOffset } = params

    limit = parseInt(limit, 10)
    limit = Number.isNaN(limit) ? defaultLimit : limit

    offset = parseInt(offset, 10)
    offset = Number.isNaN(offset) ? defaultOffset : offset

    return { limit, offset }
  }

  /**
   * @param {string} querystring
   * @return {object}
   */
  function parseQuery(querystring) {
    return qs.parse(querystring)
  }

  /**
   * @param {object} params.order
   * @param {object} params.prop
   * @return {object}
   * private
   */
  function sortSettings(params) {
    const { prop = defaultProp } = params
    let { order = defaultOrder } = params

    order = (order === 'desc' || order === 'asc') ? order : defaultOrder

    return { order, prop }
  }

  /**
   * @param {object} params.f
   * @param {object} params.p
   * @param {object} params.s
   * @return {object}
   */
  function transformQuery(query) {
    const { f: filters = {}, p = {}, s = {} } = query

    const page = pageSettings(p)
    const sort = sortSettings(s)

    return { filters, page, sort }
  }

  return { pageSettings, parseQuery, sortSettings, transformQuery }
}


module.exports.inject = {}
