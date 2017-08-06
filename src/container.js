const Container = require('app-container')

const container = new Container({
  namespace: 'inject',
  defaults: { singleton: true },
})

container.glob('**/*.js', { dir: __dirname, ignore: ['index.js'] })

module.exports = container
