import Bluebird from 'bluebird'

export default function handler() {
  return Bluebird.try(() => {
    const data = { data: 'Example feature message' }
    return data
  })
}

export const inject = { type: 'object' }
