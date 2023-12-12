# mwa

[![Build Status][build-img]][build-url]
[![Coverage Status][codecov-img]][codecov-url]
[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> 😘 **M**iddle **W**are **A**sync, easily create your own middleware layer. It's like koa's middleware.

## Installation

```shell
$ npm install mwa

# or pnpm
$ pnpm add mwa

# or yarn
$ yarn add mwa
```

> [!NOTE]
> `mwa` is an [ESM-only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) package.

## Usage

```js
import mwa from 'mwa'

const app = mwa()

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
} catch (err) {
  console.error(err)
}
```

## API

### mwa()

Return a new Mwa instance.

### Instance

#### .use(middleware)

Use the given middleware. Return the instance itself.

##### middleware

- Type: `async function` or `async function[]`
- Details: middleware function.

#### .run(state)

Run all middlewares. Return a Promise.

##### state

- Type: `any`
- Details: middleware context.

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [zce](https://zce.me)



[build-img]: https://img.shields.io/github/actions/workflow/status/zce/mwa/main.yml
[build-url]: https://github.com/zce/mwa/actions
[codecov-img]: https://img.shields.io/codecov/c/github/zce/mwa
[codecov-url]: https://codecov.io/gh/zce/mwa
[license-img]: https://img.shields.io/github/license/zce/mwa
[license-url]: https://github.com/zce/mwa/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/mwa
[downloads-url]: https://npm.im/mwa
[version-img]: https://img.shields.io/npm/v/mwa
[version-url]: https://npm.im/mwa
[dependency-img]: https://img.shields.io/david/zce/mwa
[dependency-url]: https://david-dm.org/zce/mwa
[devdependency-img]: https://img.shields.io/david/dev/zce/mwa
[devdependency-url]: https://david-dm.org/zce/mwa?type=dev
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
