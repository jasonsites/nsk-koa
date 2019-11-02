/**
 * @file http/documentation/index.js
 * @overview api documentation
 */

const config = require('config')
const swagger = require('koa2-swagger-ui')

module.exports = function documentation({ spec }) {
  const { namespace } = config.get('api')

  const base = {
    title: 'Domain API',
    oauthOptions: {},
    routePrefix: `/${namespace}/documentation`,
    hideTopbar: false,
    swaggerOptions: {
      spec,
      supportedSubmitMethods: ['get', 'post', 'put', 'delete'],
      docExpansion: 'none',
      jsonEditor: false,
      defaultModelRendering: 'schema',
      showRequestHeaders: false,
      swaggerVersion: '3.0.1',
    },
  }

  return function configure(app) {
    app.use(swagger(base))
  }
}

module.exports.inject = {
  require: {
    spec: 'http/documentation/spec',
  },
}
