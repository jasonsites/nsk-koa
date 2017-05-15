import Baobab from 'baobab'
import Bluebird from 'bluebird'

import configSchema from './config.json'

export default function config(validation) {
  return Bluebird.try(() => {
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
  })
}

export const inject = {
  require: 'validation/index',
}
