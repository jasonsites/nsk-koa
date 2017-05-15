import Bluebird from 'bluebird'

export default function handler() {
  return Bluebird.try(() => {
    const data = { data: 'feature data example' }
    return data
  })
}

export const inject = { type: 'object' }
