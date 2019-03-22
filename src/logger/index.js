/**
 * @file logger/index.js
 * @overview application (base) logger
 */

const { createLogger } = require('bunyan')
const config = require('config')

const { name, version } = require('../../package.json')

module.exports = function logger() {
  const level = config.get('logger.app.level')
  return createLogger({ level, name, version })
}

module.exports.inject = {
  name: 'logger',
}
