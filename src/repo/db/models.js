/**
* @file repo/models.js
* @overview repository upsert models
*/

module.exports = function models({ core }) {
  const { Entity } = core

  function createdModel({ user_id }) {
    return {
      created_by: user_id,
    }
  }

  function domainModel({ data }) {
    const { name } = data
    return { name }
  }

  /**
   * NOTE: implicitly relying on request validation to ensure data model integrity
   */
  function getModel({ data, method = 'update', type, user_id }) {
    if (method === 'destroy') {
      return softDeleteModel({ user_id })
    }
    const model = getModelForType({ data, type })
    if (method === 'create') {
      return { ...model, ...createdModel({ user_id }) }
    }
    return { ...model, ...modifiedModel({ user_id }) }
  }

  function getModelForType({ data, type }) {
    switch (type) {
      case Entity.DomainEntity: return domainModel({ data })
      default: throw new Error(`invalid entity type '${type}'`)
    }
  }

  function modifiedModel({ user_id }) {
    return {
      modified_on: Date.now().toISOString(),
      modified_by: user_id,
    }
  }

  function softDeleteModel({ user_id }) {
    return {
      deleted: true,
      ...modifiedModel({ user_id }),
    }
  }

  return { getModel }
}

module.exports.inject = {
  require: {
    core: 'core',
  },
}
