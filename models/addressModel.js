const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  address: String,
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }],
});

module.exports = mongoose.model("Address", addressSchema);
