const config = require('config')
const { cloneDeep, omit, startsWith } = require('lodash')
const createTransformalizer = require('transformalizer')

const transformalizer = createTransformalizer()

/**
 * Factory function that returns an attribute building function
 * that picks a set of paths off the source object
 * @param  {String[]} paths - attributes
 * @return {Function}
 */
transformalizer.buildAttributes = function buildAttributes(paths) {
  /**
   * data.attributes hook
   * @param  {Object} params          - parameters
   * @param  {Object} params.data     - resource data
   * @param  {Object} params.options  - serialize options
   * @return {Object}
   */
  return function _buildAttributes({ data }) {
    return { feature: cloneDeep(omit(data, paths)) }
  }
}

/**
 * data.id hook
 * @param  {Object} params      - parameters
 * @param  {Object} params.data - resource data
 * @return {String}
 */
transformalizer.dataId = function dataId(params) {
  return params.data.id
}

/**
 * Factory function that returns a data links building function
 * @param  {String[]} pathSegments - url path segments
 * @return {Function}
 */
transformalizer.dataLinks = function dataLinks(pathSegments) {
  /**
   * data.links hook
   * @param  {Object} params    - parameters
   * @param  {Object} params.id - resource id
   * @return {String}
   */
  return function _dataLinks({ id }) {
    const baseUrl = config.get('api.baseUrl')
    const path = pathSegments.map((segment) => {
      if (startsWith(segment, ':')) {
        const param = segment.slice(1)
        if (param === 'id') return `/${id}`
      }
      return `/${segment}`
    }).join('')
    return {
      self: `${baseUrl}${path}`,
    }
  }
}

/**
 * data.meta hook
 * @param  {Object} params         - parameters
 * @param  {Object} params.data    - resource data
 * @param  {Object} params.options - serialize options
 * @return {String}
 */
transformalizer.dataMeta = function dataMeta() {
  const meta = {}
  return meta
}

module.exports = transformalizer
