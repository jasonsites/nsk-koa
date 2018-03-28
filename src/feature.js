
module.exports = function feature(repo) {
  async function create({ data }) {
    return repo.create({ data })
  }

  async function destroy({ id }) {
    return repo.destroy({ id })
  }

  async function detail({ id }) {
    return repo.get({ id })
  }

  async function update({ data }) {
    return repo.update({ data })
  }

  return { create, destroy, detail, update }
}

module.exports.inject = {
  name: 'feature',
  require: ['repo'],
}