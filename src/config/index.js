const Baobab = require('baobab')
const Bluebird = require('bluebird')

const configSchema = require('./config.json')

module.exports = function config(validation) {
  const validator = validation.createValidator({ schemas: { config: configSchema } })
  const validated = validator.throwOnInvalid({ id: 'config', val: {} })
  const tree = new Baobab(validated)

  /**
   * Get config from the tree
   * @param  {...String} args
   * @return {*}
   */
  function get(...args) {
    return tree.get(...args)
  }

  /**
   * Create a cursor on a branch of the tree
   * @param  {...String} args
   * @return {Cursor}
   */
  function select(...args) {
    return tree.select(...args)
  }

  return { get, select }
}

module.exports.inject = {
  require: 'validation/index',
}
