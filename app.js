const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const transactionRoutes = require("./routes/transactionRoutes");
const ethereumPriceRoutes = require("./routes/ethereumPriceRoutes");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());

connectDB();

app.use("/api", transactionRoutes);
app.use("/api", ethereumPriceRoutes);
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
