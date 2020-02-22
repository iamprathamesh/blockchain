const Block = require('./block');

console.log(Block.mineBlock(Block.genesis(), 'block after genesis block').toString());