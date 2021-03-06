# clg-color

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

clg-color is simple utility for Console.log() with color

![Logo Theme](https://raw.githubusercontent.com/huynhsamha/clg-color/master/screenshot/logo.png)

## Installation

```
npm install clg-color

npm install clg-color --save
```

## Usage

This is simple **`console.log()`** with **color**.

This package only have **6 levels** about **`console.log()`**, which are `error`, `success`, `warning`, `info`, `prompt` and `log`. And color for each level is shown as below:

1. **error**: highlight with color **red**
2. **success**: highlight with color **green**
3. **warning**: highlight with color **yellow**
4. **info**: highlight with color **cyan**
5. **prompt**: highlight with color **dark**
6. **log**: is normal **console.log()**

## Example

```javascript
var log = require('clg-color');

log.error('This is error with color red');
log.warning('This is warning with color orange');
log.info('This is info with color blue');
log.success('This is success with color green');
log.prompt('This is prompt with color grey');
log.log('This is console.log as normal');

let jets = [
    { title: 'Gulfstream G650', serial: 6166, 
        price: '$59,950,000', year: 2015 },
    { title: 'Dassault Falcon 7X', serial: 221, 
        price: '$29,995,000', year: 2013 }
];

log.error('Jets for sale:', jets[0].title);
log.success('Jets for sale:', jets[0], jets[1]);
log.info('Jets for sale:', jets);
```

### Screenshots for above example

![Dark Theme](https://raw.githubusercontent.com/huynhsamha/clg-color/master/screenshot/dark-theme.png)

![Dark Theme](https://raw.githubusercontent.com/huynhsamha/clg-color/master/screenshot/linux-theme.png)

![Light Theme](https://raw.githubusercontent.com/huynhsamha/clg-color/master/screenshot/light-theme.png)

## Donate

<a href="https://www.paypal.me/harisk305/5" target="_blank"><img src="https://i.imgur.com/4bN8fdy.jpg" alt="Donate to my paypal" width=240></a>



[npm-image]: https://img.shields.io/npm/v/clg-color.svg?style=flat
[npm-url]: https://www.npmjs.com/package/clg-color
[downloads-image]: https://img.shields.io/npm/dm/clg-color.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/clg-color
