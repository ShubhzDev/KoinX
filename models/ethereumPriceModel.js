const mongoose = require("mongoose");

const ethereumPriceSchema = new mongoose.Schema({
  priceInr: Number,
  timeStamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("EthereumPrice", ethereumPriceSchema);
