import mwa from '../src'

test('middlewares', async () => {
  type State = Record<string, number>
  const order: number[] = []

  const app = mwa<State>()

  app.use(async (state, next) => {
    expect(state.a).toBe(1)
    state.b = 2
    order.push(1)
    await next()
    order.push(2)
  })

  app.use([
    async (state, next) => {
      expect(state.b).toBe(2)
      state.c = 3
      order.push(3)
      await next()
      order.push(4)
    },
    async (state, next) => {
      expect(state.c).toBe(3)
      state.d = 4
      order.push(5)
      await next()
      order.push(6)
    }
  ])

  app.use(async (state, next) => {
    expect(state.d).toBe(4)
    order.push(7)
    await next()
    order.push(8)
  })

  await app.run({ a: 1 })

  expect(order).toEqual([1, 3, 5, 7, 8, 6, 4, 2])
})