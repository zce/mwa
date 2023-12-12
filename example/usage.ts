import createMwa from '../src'

const app = createMwa<Record<string, number>>()

app.use(async (state, next) => {
  console.log('mw1 start: ', state)
  state.a = 1
  await next()
  console.log('mw1 end: ', state)
})

app.use(async (state, next) => {
  console.log('mw2 start: ', state)
  state.b = 1
  await next()
  console.log('mw2 end: ', state)
})

try {
  await app.run({})
  console.log('all completed')
} catch (err: any) {
  console.error(err)
}
