const Transaction = require("../models/transactionModel");
const Address = require("../models/addressModel");
const etherscanService = require("../services/etherscanService");

exports.getTransactions = async (req, res) => {
  const address = req.params.address;
  const response = await etherscanService.getTransactions(address);
  let newTransactions = [];
  let addressDatabase;

  try {
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

        if (
          Array.isArray(missingTransactions) &&
          missingTransactions.length > 0
        ) {
          for (const transaction of missingTransactions) {
            const newTransaction = new Transaction({
              ...transaction,
            });
            const savedTransaction = await newTransaction.save();
            addressDatabase.transactions.push(savedTransaction._id);
            await addressDatabase.save();
          }

          const updatedTransactions = await Address.findOne({
            address: address,
          }).populate("transactions");

          res
            .status(200)
            .send({ transactions: updatedTransactions.transactions });

        } else {
          res.status(200).send({ transactions: transactions });
        }
      }
    } else {

      console.log("Address not present in database!!");

      // console.log("response.data.result "+response.data.result);
      if (response.data && response.data.result) {
        newTransactions.push(...response.data.result);

        let transactionIds = [];
        for (const transaction of newTransactions) {
          // console.log("adding transaction "+transaction);

          const newTransaction = new Transaction({ ...transaction });
          const savedTransaction = await newTransaction.save();
          transactionIds.push(savedTransaction._id);
        }

        const newAddress = new Address({
          address: address,
          transactions: transactionIds,
        });

        await newAddress.save();

        res.status(200).send({
          transactions: newTransactions,
        });
      }
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: "Failed to retrieve transactions for address" });
  }
};
