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
}

module.exports = Block;