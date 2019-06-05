/**
 * @file container.js
 * @overview dependency injection container
 */

const Container = require('app-container')

const container = new Container({
  namespace: 'inject',
  defaults: { singleton: true },
})

container.glob('**/*.js', { cwd: __dirname, ignore: ['container.js', 'index.js'] })

module.exports = container
