const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

router.get("/transactions/:address", transactionController.getTransactions);

module.exports = router;
