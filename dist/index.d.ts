/**
 * Middleware
 * @template S state type
 */
type Middleware<S> = (state: S, next: () => Promise<void>) => Promise<void> | void;
/**
 * Middleware Async.
 * @template S state type
 */
declare class Mwa<S> {
    private readonly middlewares;
    constructor();
    /**
     * Use the given middleware.
     * @param middleware middleware func
     */
    use(middleware: Middleware<S> | Array<Middleware<S>>): Mwa<S>;
    /**
     * Run all middlewares.
     * @param state initial state
     * @see {@link https://github.com/koajs/compose/blob/master/index.js}
     */
    run(state: S): Promise<void>;
    /**
     * Create middlewares layer.
     */
    static create<T>(): Mwa<T>;
}
declare const _default: typeof Mwa.create;

export { type Middleware, Mwa, _default as default };
