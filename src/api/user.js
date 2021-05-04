/**
 * @file api/user.js
 * @overview example (user) service client
 * NOTE: this module (dir and filename) should be renamed to reflect the actual service client
 */

const axios = require('axios')
const config = require('config')

module.exports = function service() {
  const options = config.get('services.user.api')
  const client = axios.create(options)

  return { client }
}

module.exports.inject = {}
