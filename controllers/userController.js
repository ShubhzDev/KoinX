const ethereumService = require("../services/ethereumService");

exports.getUserBalance = async (req, res) => {
  const address = req.params.address;

  try {
    const balance = await ethereumService.calculateUserBalance(address);
    const ethereumPrice = await ethereumService.getEthereumPrice();

    res.status(200).send({ balance, ethereumPrice });
  } catch (err) {
    res.status(500).send({ message: "Failed to retrieve user balance" });
  }
};
