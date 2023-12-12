// src/index.ts
var Mwa = class _Mwa {
  middlewares;
  constructor() {
    this.middlewares = [];
  }
  /**
   * Use the given middleware.
   * @param middleware middleware func
   */
  use(middleware) {
    if (typeof middleware === "function") {
      this.middlewares.push(middleware);
    } else {
      this.middlewares.push(...middleware);
    }
    return this;
  }
  /**
   * Run all middlewares.
   * @param state initial state
   * @see {@link https://github.com/koajs/compose/blob/master/index.js}
   */
  async run(state) {
    const next = async (idx) => {
      const middleware = this.middlewares[idx];
      if (middleware == null)
        return await Promise.resolve();
      const result = middleware(state, async () => await next(idx + 1));
      return await Promise.resolve(result);
    };
    return await next(0);
  }
  /**
   * Create middlewares layer.
   */
  static create() {
    return new _Mwa();
  }
};
var src_default = Mwa.create;
export {
  Mwa,
  src_default as default
};
