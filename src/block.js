const SHA256 = require('crypto-js/sha256');
class Block {
    constructor(timestamp, prevHash, hash, data) {
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
    }

    static hash(timestamp, prevHash, data) {
        return SHA256(`${timestamp}${prevHash}${data}`).toString();
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
        const hash = Block.hash(timestamp, prevHash, data);

        return new this(timestamp, prevHash, hash, data);
    }
    
}

module.exports = Block;