const Container = require('app-container')

const container = new Container({
  namespace: 'inject',
  defaults: { singleton: true },
})

container.glob('{config,feature,http,logger,validation}/**/*.js', { dir: __dirname })

module.exports = container
