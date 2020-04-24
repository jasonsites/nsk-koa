const { extend } = require('lodash')

const container = require('../../src/container')

module.exports = { bootstrap, loadModules }

async function bootstrap() {
  // async bootstrap
}

/**
 * load modules from the DI container
 * assign to the current context
 * @param  {Object} modules - module map
 * @return {Promise}
 */
async function loadModules(modules) {
  const mods = await container.load(modules)
  extend(this, mods)
}
