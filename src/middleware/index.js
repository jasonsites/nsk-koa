import bodyParser from 'koa-bodyparser'
import logger from 'koa-bunyan-logger'
import compose from 'koa-compose'
import convert from 'koa-convert'
import cors from 'koa-cors'

export default function middleware() {
  return compose([
    logger(),
    convert(cors()),
    convert(bodyParser({
      extendTypes: { json: ['application/vnd.api+json'] },
    })),
  ])
}
