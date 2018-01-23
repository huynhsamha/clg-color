# clg-color

#### clg-color is simple utility for Console.log() with color
----------

## Installation

`npm install clg-color`

`npm install clg-color --save`

----------

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


## GitHub
[https://github.com/huynhsamha/clg-color](https://github.com/huynhsamha/clg-color)