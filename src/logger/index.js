const { createLogger } = require('bunyan')

const { name, version } = require('../../package.json')

module.exports = function logger(config) {
  const level = config.get(['log', 'level'])
  return createLogger({ name: `${name}/${version}`, level })
}

module.exports.inject = {
  require: 'config/index',
}
