const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const transactionRoutes = require("./routes/transactionRoutes");
const userBalanceRoutes = require("./routes/userBalanceRoutes");
const { updateEthereumPrice } = require("./utils/priceUpdater");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());

connectDB();

app.use("/api", transactionRoutes);
app.use("/api", userBalanceRoutes);

updateEthereumPrice();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
