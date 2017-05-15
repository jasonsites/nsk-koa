import { createLogger } from 'bunyan'

import { name, version } from '../../package.json'

export default function logger(config) {
  const level = config.get(['log', 'level'])
  return createLogger({ name: `${name}/${version}`, level })
}

export const inject = {
  require: 'config/index',
}
