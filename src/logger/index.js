const { createLogger } = require('bunyan')
const config = require('config')

const { name, version } = require('../../package.json')

module.exports = function logger() {
  const level = config.get('log.level')
  return createLogger({ name: `${name}/${version}`, level })
}

module.exports.inject = {
  name: 'logger',
}
