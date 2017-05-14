import koaBunyanLogger from 'koa-bunyan-logger'

import { name, version } from '../../../package.json'

export default function logger(config) {
  const level = config.get(['log', 'level'])
  return koaBunyanLogger({ name: `${name}/${version}`, level })
}
