/**
 * @file validation/schemas/common.js
 * @overview common schemas across types
 */

const joi = require('@hapi/joi')

module.exports = { single }

/**
 * returns a schema function for a single entity request of `type`
 * @param {Function} params.type - schema type function with signature `type({ method })`
 * @return {Function}
 */
function single({ type }) {
  /**
   * create joi validation schema for single entity request body
   * @param  {String} params.method - http request method (POST, PUT)
   * @return {Object}
   */
  return ({ core, method }) => joi.object().keys({
    meta: joi.object(),
    data: joi.object().keys(type({ core, method })).required(),
  }).required()
}
