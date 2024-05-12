const userBalanceService = require("../services/userBalanceService");
const Address = require("../models/addressModel");

exports.getUserBalance = async (req, res) => {
  const address = req.params.address;

  try {
    const addressDoc = await Address.findOne({ address: address }).populate(
      "transactions"
    );

    if (addressDoc) {
      const transactions = addressDoc.transactions;

      const balance = await userBalanceService.calculateUserBalance(
        address,
        transactions
      );
      const ethereumPrice = await userBalanceService.getEthereumPrice();
      res.status(200).send({ balance, ethereumPrice });
    } else {
      res
        .status(500)
        .send({ message: "User Address Doen't exit in our databse" });
    }
  } catch (err) {
    res.status(500).send({ message: "Failed to retrieve user balance" });
  }
  
};
