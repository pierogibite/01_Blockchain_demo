/* Import */
const Block = require("./block");
const Blockchain = require("./blockchain");
// const block = new Block("aktuelle Zeit", "hash0", "hash1", "meine Daten");

// console.log("Platzhalter")
// console.log(block.toString());
// console.log(Block.genesis().toString());

// const block = new Block("aktuelle Zeit", "hash0", "hash1", "meine Daten");
// console.log(block.toString());
// console.log(Block.genesis().toString());

// const testBlock = Block.mineBlock(Block.genesis(),"testDaten")
// console.log(testBlock.toString());

/***  Test der Blockchain-Funktionalität  */

const chain = new Blockchain();
console.log(chain);

chain.addBlock("daten von Block 1");
console.log(chain);

chain.addBlock("daten von Block 2");
chain.addBlock("daten von Block 3");
chain.addBlock("daten von Block 4");

console.log(chain);

