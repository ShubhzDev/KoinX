const Transaction = require("../models/transactionModel");
const Address = require("../models/addressModel");
const etherscanService = require("../services/etherscanService");

exports.getTransactions = async (req, res) => {
  const address = req.params.address;
  const response = await etherscanService.getTransactions(address);

  try {
    let newTransactions = [];
    let addressDatabase;

    addressDatabase = await Address.findOne({ address: address }).populate(
      "transactions"
    );

    if (addressDatabase) {
      const transactions = addressDatabase.transactions;
      if (response.data && response.data.result) {
        newTransactions.push(...response.data.result);

        const existingTransactions = transactions.map(
          (transaction) => transaction.hash
        );
        const missingTransactions = newTransactions.filter(
          (transaction) => !existingTransactions.includes(transaction.hash)
        );

        missingTransactions.forEach(async(transaction) => {
          console.log("missing");
          const newTransaction = new Transaction({
            ...transaction,
          });
          const savedTransaction = await newTransaction.save();
          addressDatabase.transactions.push(savedTransaction._id);
        });    

        await addressDatabase.save();

        const updatedtransactions = addressDatabase.transactions;
        res.status(200).send({ transactions: updatedtransactions });

      }
    } else {
      if (response.data && response.data.result) {
        newTransactions.push(...response.data.result);

        for (const transaction of newTransactions) {
          const newTransaction = new Transaction({ ...transaction });
          const savedTransaction = await newTransaction.save();
          // console.log("Saved Transaction ID: " + savedTransaction._id);
        }
      
        const transactionIds = newTransactions.map(transaction => transaction._id);
      
        const newAddress = new Address({
          address: address,
          transactions: transactionIds,
        });

        await newAddress.save();

        res.status(200).send({
          transactions : newTransactions,
        });
      }
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: "Failed to retrieve transactions for address" });
  }
};
