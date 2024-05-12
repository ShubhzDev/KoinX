const { ethers } = require("ethers");
const coingeckoService = require("./coingeckoService");

exports.calculateUserBalance = async (address, transactions) => {
  let balance = ethers.BigNumber.from(0);

  transactions.forEach((transaction) => {
    if (transaction.to === address) {
      balance = balance.add(ethers.utils.parseUnits(transaction.value, "wei"));
    } else if (transaction.from === address) {
      const gasPrice = ethers.BigNumber.from(transaction.gasPrice);
      const gasUsed = ethers.BigNumber.from(transaction.gasUsed);
      const gasFee = gasPrice.mul(gasUsed);
      
      balance = balance.sub(ethers.utils.parseUnits(transaction.value, "wei")).sub(gasFee);
    }
  });

  return ethers.utils.formatEther(balance);
};

exports.getEthereumPrice = async () => {
  const price = await coingeckoService.getEthereumPrice();
  return price;
};
