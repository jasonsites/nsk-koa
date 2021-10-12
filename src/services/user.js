/**
 * @file services/user.js
 * @overview example (user) service
 */

const config = require('config')

module.exports = function service({ api, logger }) {
  const { enabled, label, level } = config.get('logger.services.user')

  return {
    context: (correlation) => {
      const { headers, req_id } = correlation
      const log = logger.child({ module: label, req_id, level })

      async function get() {
        try {
          const response = await api.client({ url: '/', method: 'get', headers })
          const { data } = response
          if (enabled) log.info(data)
          return data
        } catch (err) {
          log.error(err)
          throw err
        }
      }

      return { get }
    },
  }
}

module.exports.inject = {
  require: {
    api: 'api/user',
    logger: 'logger',
  },
}
