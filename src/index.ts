/* eslint-disable @typescript-eslint/return-await, @typescript-eslint/promise-function-async */

/**
 * Middleware
 * @template S state type
 */
export type Middleware<S> = (state: S, next: () => Promise<void>) => Promise<void> | void

/**
 * Middleware Async.
 * @template S state type
 */
export class Mwa<S> {
  private readonly middlewares: Array<Middleware<S>>

  constructor () {
    this.middlewares = []
  }

  /**
   * Use the given middleware.
   * @param middleware middleware func
   */
  use (middleware: Middleware<S> | Array<Middleware<S>>): Mwa<S> {
    if (typeof middleware === 'function') {
      this.middlewares.push(middleware)
    } else {
      this.middlewares.push(...middleware)
    }
    return this
  }

  /**
   * Run all middlewares.
   * @param state initial state
   * @see {@link https://github.com/koajs/compose/blob/master/index.js}
   */
  run (state: S): Promise<void> {
    const next = async (): Promise<void> => {
      const current = this.middlewares.shift()
      if (current == null) return Promise.resolve()
      const result = current(state, next)
      return Promise.resolve(result)
    }
    return next()
  }

  /**
   * Create middlewares layer.
   */
  static create<T> (): Mwa<T> {
    return new Mwa<T>()
  }
}

export default Mwa.create

// For CommonJS default export support
module.exports = Mwa.create
module.exports.default = Mwa.create
module.exports.Mwa = Mwa
