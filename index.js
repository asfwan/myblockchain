const CryptoBlock = require('./CryptoBlock.js');
const CryptoBlockChain = require('./CryptoBlockChain.js');

let safuCoin = new CryptoBlockChain();

console.log("safuCoin mining in progress....");
safuCoin.addNewBlock(
  new CryptoBlock(1, "01/06/2020", {
    sender: "Iris Ljesnjanin",
    recipient: "Cosima Mielke",
    quantity: 50
  })
);

safuCoin.addNewBlock(
  new CryptoBlock(2, "01/07/2020", {
    sender: "Vitaly Friedman",
    recipient: "Ricardo Gimenes",
    quantity: 100
  })
);

console.log(JSON.stringify(safuCoin, null, 4));
