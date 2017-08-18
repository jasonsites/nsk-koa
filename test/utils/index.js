const { extend } = require('lodash')

const container = require('../../src/container')

/**
 * load modules from the DI container and assign them to the current context
 * @param  {Object} modules - module map
 * @return {Promise}
 */
async function loadModules(modules) {
  return container.load(modules)
    .then((mods) => {
      extend(this, mods)
    })
}

module.exports = { loadModules }
