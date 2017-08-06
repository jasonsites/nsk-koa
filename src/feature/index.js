const Bluebird = require('bluebird')

module.exports = function handler(data) {
  return Bluebird.try(() => data)
}

module.exports.inject = { type: 'object' }
