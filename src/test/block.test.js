const Block = require('../block');

describe('Block', () => {
    let data, prevBlock, block;

    beforeEach(() => {
        data = 'test data';
        prevBlock = Block.genesis();
        block = Block.mineBlock(prevBlock, data);
    });

    it('Check if `data` is correct', () => {
        expect(block.data).toEqual(data);
    });

    it('Check if `prevHash` is equal to hash of last block', () => {
        expect(block.prevHash).toEqual(prevBlock.hash);
    });
});