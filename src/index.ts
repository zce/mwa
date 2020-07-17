// TODO: Implement module

export interface Options {
  host: string
}

export default (name: string, options?: Options) => {
  if (typeof name !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof name}`)
  }

  options = Object.assign({}, options)

  return `${name}@${options.host || 'zce.me'}`
}
