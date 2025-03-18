class Block
{
    constructor(timestamp, lastHash, hash, data)
    {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString()
    {
        return `Block -
        Timestamp: ${this.timestamp}
        Last Hash: ${this.lastHash}
        Hash: ${this.hash}
        Data: ${this.data}`
    }
    static genesis(){ // 1. Block der chain
        return new this("GenesisTime","000000","#abcdC1234","GenesisData"); // call constructor
    }
    static mineBlock(lastBlock, blockData){ // weitere Blocks in der Chain
        
        const timestamp = Date.now(); // Zeit im ms seit 01.01.1970 | UNIX
        const lastHash  = lastBlock.hash; // HASH-Wert des Vorgängers
        const hash      = "Hash:to Do"

        return new this(timestamp, lastHash, hash, blockData); // call constructor

    }


}
module.exports = Block; // Export als Modul