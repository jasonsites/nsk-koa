/**
 * @file api/index.js
 * @overview example api client
 */

const axios = require('axios')
const config = require('config')

module.exports = function api() {
  const options = config.get('service.api')
  const client = axios.create(options)

  return { client }
}

module.exports.inject = {}
