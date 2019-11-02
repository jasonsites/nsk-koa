/**
 * @file http/documentation/index.js
 * @overview api documentation
 */

const { version } = require('../../../package.json')

module.exports = function spec({ entities }) {
  const { schemas, tags, paths } = entities.reduce((memo, entity) => {
    memo.paths = { ...memo.schemas, ...entity.paths }
    memo.schemas = { ...memo.schemas, ...entity.schemas }
    memo.tags = [...memo.tags, ...entity.tags]
    return memo
  }, { paths: {}, schemas: {}, tags: [] })

  const openapi = '3.0.1'

  const info = {
    version,
    title: 'Domain',
    description: 'Domain API',
    termsOfService: '{url}',
    contact: {
      name: 'nsk-koa',
      email: 'email@domain.com',
      url: 'https://domain.com/',
    },
    license: {
      name: '',
      url: '',
    },
  }

  const servers = [{
    url: 'http://localhost:9002/',
    description: 'Local server',
  }]

  return { openapi, info, servers, tags, paths, components: { schemas } }
}

module.exports.inject = {
  require: {
    entities: 'any!^http/documentation/entities/.+/index',
  },
}
