var log = require('./../index');

log.error('This is error with color red');
log.warning('This is warning with color orange');
log.info('This is info with color blue');
log.success('This is success with color green');
log.log('This is console.log as normal');

let jets = [
    { title: 'Gulfstream G650', serial: 6166, price: '$59,950,000', year: 2015 },
    { title: 'Gulfstream G450', serial: 4302, price: '$18,000,000', year: 2014 },
    { title: 'Dassault Falcon 7X', serial: 221, price: '$29,995,000', year: 2013 },
    { title: 'Dassault Falcon 7X', serial: 170, price: '$24,300,000', year: 2013 },
];

log.warning('Jets for sale:', jets[0].title, jets[0].serial, jets[0].price);

log.success('Jets for sale:', jets[1]);

log.info('Jets for sale:', jets[2], jets[3]);

log.log('Jets for sale:', jets);