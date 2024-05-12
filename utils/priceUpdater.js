const EthereumPrice = require("../models/ethereumPriceModel");
const coingeckoService = require("../services/coingeckoService");

const updateEthereumPrice = async () => {
  try {
    const price = await coingeckoService.getEthereumPrice();
    const newPrice = new EthereumPrice({ priceInr: price });
    await newPrice.save();
    console.log("Ethereum price updated successfully!");
  } catch (err) {
    console.error("Failed to update Ethereum price:", err);
  }
};

const interval = 10 * 60 * 1000; // 10 minutes
setInterval(updateEthereumPrice, interval);

module.exports = { updateEthereumPrice };