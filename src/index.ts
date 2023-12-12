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
  async run (state: S): Promise<void> {
    const next = async (idx: number): Promise<void> => {
      const middleware = this.middlewares[idx]
      if (middleware == null) return await Promise.resolve()
      const result = middleware(state, async () => await next(idx + 1))
      return await Promise.resolve(result)
    }
    return await next(0)
  }

  /**
   * Create middlewares layer.
   */
  static create<T> (): Mwa<T> {
    return new Mwa<T>()
  }
}

export default Mwa.create
