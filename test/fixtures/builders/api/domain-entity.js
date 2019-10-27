const chance = require('../../chance')

function domainEntityBody(core, params = {}) {
  return { data: domainEntity(core, params) }
}

function domainEntity(core, params = {}) {
  const defaults = {
    name: chance.word(),
  }

  params = { ...defaults, ...params }

  const { id, name } = params

  const entity = {
    type: core.Entity.DomainEntity,
    properties: {
      name,
    },
  }

  if (id) entity.id = id

  return entity
}

chance.mixin({ domainEntity, domainEntityBody })

module.exports = { domainEntity, domainEntityBody }
