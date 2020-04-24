const chance = require('../../chance')

function domainResourceBody(core, params = {}) {
  return { data: domainResource(core, params) }
}

function domainResource(core, params = {}) {
  const defaults = {
    name: chance.word(),
  }

  params = { ...defaults, ...params }

  const { id, name } = params

  const resource = {
    type: core.Resource.DomainResource,
    properties: {
      name,
    },
  }

  if (id) resource.id = id

  return resource
}

chance.mixin({ domainResource, domainResourceBody })

module.exports = { domainResource, domainResourceBody }
