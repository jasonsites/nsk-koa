/**
 * @file http/documentation/index.js
 * @overview api documentation
 */

const config = require('config')
const swagger = require('koa2-swagger-ui')

module.exports = function documentation({ spec }) {
  const { namespace } = config.get('api')

  const configuration = {
    hideTopbar: false,
    oauthOptions: {},
    routePrefix: `/${namespace}/documentation`,
    swaggerOptions: {
      defaultModelRendering: 'example',
      defaultModelsExpandDepth: -1,
      docExpansion: 'list',
      spec,
      supportedSubmitMethods: ['get', 'post', 'put', 'delete'],
      swaggerVersion: '3.0.2',
    },
    title: 'Domain API',
  }

  return function configure(app) {
    app.use(swagger(configuration))
  }
}

module.exports.inject = {
  require: {
    spec: 'http/documentation/specification',
  },
}
