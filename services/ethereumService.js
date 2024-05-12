const Transaction = require("../models/transactionModel");
const coingeckoService = require("./coingeckoService");

exports.calculateUserBalance = async (address) => {
  const transactions = await Transaction.find({
    $or: [{ to: address }, { from: address }],
  });

  let balance = 0;
  transactions.forEach((transaction) => {
    if (transaction.to === address) {
      balance += parseInt(transaction.value);
    } else if (transaction.from === address) {
      balance -= parseInt(transaction.value);
    }
  });

  return balance;
};

exports.getEthereumPrice = async () => {
  const price = await coingeckoService.getEthereumPrice();
  return price;
};
