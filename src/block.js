class Block {
    constructor(timestamp, prevHash, hash, data) {
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `Block-
        Timestamp: ${this.timestamp}
        Previous Hash: ${this.prevHash}
        Hash: ${this.hash}
        Data: ${this.data}`;
    }

    static genesis() {
        return new this(Date.now(), '-----', 'f1rs7-h45h', 'genesis block');
    }

    static mineBlock(prevBlock, data) {
        const timestamp = Date.now();
        const prevHash = prevBlock.hash;
        const hash = 'test-hash';

        return new this(timestamp, prevHash, hash, data);
    }
}

module.exports = Block;