const EthereumPrice = require("../models/ethereumPriceModel");
const coingeckoService = require("../services/coingeckoService");

exports.getEthereumPrice = async (req, res) => {
  try {
    const price = await coingeckoService.getEthereumPrice();
    const newPrice = new EthereumPrice({ priceInr: price });
    await newPrice.save();
    res.status(200).send({ price });
  } catch (err) {
    res.status(500).send({ message: "Failed to retrieve Ethereum price" });
  }
};
