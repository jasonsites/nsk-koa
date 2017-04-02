import Bluebird from 'bluebird'

export default function handler() {
  return Bluebird.try(() => {
    const data = { data: 'Example response message' }
    return data
  })
}
