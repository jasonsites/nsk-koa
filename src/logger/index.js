const { createLogger } = require('bunyan')
const config = require('config')

const { name, version } = require('../../package.json')

module.exports = function logger() {
  return createLogger({
    level: config.get('log.level'),
    name: `${name}`,
    version: `${version}`,
  })
}

module.exports.inject = {
  name: 'logger',
}
