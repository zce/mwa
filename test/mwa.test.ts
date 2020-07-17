import mwa from '../src'

// TODO: Implement module test
test('<test-title>', () => {
  expect(typeof mwa).toBe('function')
  expect(mwa('w')).toBe('w@zce.me')
  expect(mwa('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  // expect(() => mwa(100 as unknown as string)).toThrow('Expected a string, got number')
})
