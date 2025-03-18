/* Import */
const Block = require("./block");

// const block = new Block("aktuelle Zeit", "hash0", "hash1", "meine Daten");

// console.log("Platzhalter")
// console.log(block.toString());
// console.log(Block.genesis().toString());

// const block = new Block("aktuelle Zeit", "hash0", "hash1", "meine Daten");
// console.log(block.toString());
console.log(Block.genesis().toString());

const testBlock = Block.mineBlock(Block.genesis(),"testDaten")
console.log(testBlock.toString());
