import app from './server'
import config from './services/config'

const env = process.env.NODE_ENV || 'dev'
const { port } = config[env]

console.log(`Application listening on port: ${port}`)
app.listen(port)
