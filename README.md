# trim-html-tag

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> trim html tag from input

## Install

    npm install --save trim-html-tag

## Usage

```js
import trimTag from 'trim-html-tag';

trimTag('h1', '<h1> Title </h1>\n\n'); // Title
trimTag('p', '<p> Paragraph </p>\n');  // Paragraph
```

## API

### trimTag(tag, input)

#### tag

*Required*  
Type: `String`

Tag, which you want trim from html string (e.g. `h1`, `b`).

#### input

*Required*  
Type: `String`

HTML string, from which you want to trim the tag (e.g. `<p>inside</p>` or `<h1>also inside</h1>`).

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/trim-html-tag
[npm-image]: https://img.shields.io/npm/v/trim-html-tag.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/trim-html-tag
[travis-image]: https://img.shields.io/travis/iamstarkov/trim-html-tag.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/trim-html-tag
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/trim-html-tag.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/trim-html-tag
[depstat-image]: https://david-dm.org/iamstarkov/trim-html-tag.svg?style=flat-square
