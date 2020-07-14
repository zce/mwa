# mwa

[![GitHub Actions Status][actions-img]][actions-url]
[![Travis CI Status][travis-img]][travis-url]
[![Coverage Status][codecov-img]][codecov-url]
[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> Easily create your own middleware layer.

## Installation

```shell
$ npm install mwa

# or yarn
$ yarn add mwa
```

## Usage

<!-- TODO: Introduction of API use -->

```javascript
const mwa = require('mwa')
const result = mwa('zce')
// result => 'zce@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### mwa(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

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



[actions-img]: https://img.shields.io/github/workflow/status/zce/mwa/CI?label=actions
[actions-url]: https://github.com/zce/mwa/actions
[travis-img]: https://img.shields.io/travis/zce/mwa?label=travis
[travis-url]: https://travis-ci.org/zce/mwa
[codecov-img]: https://img.shields.io/codecov/c/github/zce/mwa
[codecov-url]: https://codecov.io/gh/zce/mwa
[license-img]: https://img.shields.io/github/license/zce/mwa
[license-url]: https://github.com/zce/mwa/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/mwa
[downloads-url]: https://npmjs.org/package/mwa
[version-img]: https://img.shields.io/npm/v/mwa
[version-url]: https://npmjs.org/package/mwa
[dependency-img]: https://img.shields.io/david/zce/mwa
[dependency-url]: https://david-dm.org/zce/mwa
[devdependency-img]: https://img.shields.io/david/dev/zce/mwa
[devdependency-url]: https://david-dm.org/zce/mwa?type=dev
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
