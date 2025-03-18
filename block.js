const SHA256 = require("crypto-js/sha256");
 

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
        // const hash      = Block.hash(timestamp, lastHash, blockData);
        const hash      = Block.leadingZeroHash(timestamp,lastHash,blockData);
        return new this(timestamp, lastHash, hash, blockData); // call constructor

    }
    static hash(timestamp,lastHash,data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

    static leadingZeroHash(timestamp,lastHash,blockData){
        
        let toBeHashed = timestamp + lastHash + blockData;

        const leadingZeros = 4;
        const pattern = "^0{"+leadingZeros+"}\w*";
        const regex = new RegExp(pattern);

        const maxNonce = 100000;
        let tmpNonce = 0;
        let tmpHash;

        let startTime = Date.now();

        do {
            tmpHash = this.hash(toBeHashed + tmpNonce);
            tmpNonce++;
        } while (!regex.test(tmpHash) && tmpNonce < maxNonce);
        
        let endTime = Date.now();
        
        let message =    
        `Anzahl der Durchläufe: ${tmpNonce}
        Hashwert:  ${tmpHash}
        Berechnungen pro ms: ${tmpNonce/(endTime-startTime)}`
        console.log(message);

        return tmpHash;
    }



}
module.exports = Block; // Export als Modul