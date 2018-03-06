var log = require('./index');

log.error('This is error with color red');
log.warning('This is warning with color orange');
log.info('This is info with color blue');
log.success('This is success with color green');
log.prompt('This is prompt with color grey');
log.log('This is console.log as normal');

// let jets = [
//     { title: 'Gulfstream G650', serial: 6166, price: '$59,950,000', year: 2015 },
//     { title: 'Dassault Falcon 7X', serial: 221, price: '$29,995,000', year: 2013 }
// ];

// log.error('Jets for sale:', jets[0].title);
// log.success('Jets for sale:', jets[0], jets[1]);
// log.info('Jets for sale:', jets);