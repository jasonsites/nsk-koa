const { createSerializer } = require('../serializer')
const transformalizer = require('../transformalizer')

const schema = {
  data: {
    id: transformalizer.dataId,
    links: transformalizer.dataLinks(['feature', ':id']),
    attributes: transformalizer.buildAttributes(['createdAt', 'id', 'updatedAt']),
  },
}

const serializer = createSerializer({ name: 'entity', schema })

module.exports = { serializer }
