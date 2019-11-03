/**
 * @file http/documentation/index.js
 * @overview api documentation
 */

const { version } = require('../../../package.json')

module.exports = function specification({ entities }) {
  const { schemas, tags, paths } = entities.reduce((memo, entity) => {
    if (entity.paths) memo.paths = { ...memo.schemas, ...entity.paths }
    if (entity.schemas) memo.schemas = { ...memo.schemas, ...entity.schemas }
    if (entity.tags) memo.tags = [...memo.tags, ...entity.tags]
    return memo
  }, { paths: {}, schemas: {}, tags: [] })

  const openapi = '3.0.1'

  const info = {
    title: 'Domain',
    description: 'Domain API',
    version,
    contact: {
      name: 'nsk-koa',
      email: 'email@domain.com',
      url: 'https://domain.com/',
    },
    license: {
      name: '',
      url: '',
    },
    termsOfService: '{url}',
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
