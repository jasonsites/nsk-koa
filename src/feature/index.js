const Bluebird = require('bluebird')

module.exports = function handler() {
  return Bluebird.try(() => {
    const data = { data: 'feature data example' }
    return data
  })
}

module.exports.inject = { type: 'object' }
