const Block = require('./block');

const block = new Block('time', 'prevHash', 'hash', 'data');
console.log(block.toString());