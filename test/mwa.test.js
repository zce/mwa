const mwa = require('..')

// TODO: Implement module test
test('<test-title>', () => {
  expect(mwa('w')).toBe('w@zce.me')
  expect(mwa('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => mwa(100)).toThrow('Expected a string, got number')
})
