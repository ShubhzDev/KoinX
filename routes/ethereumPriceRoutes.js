const express = require("express");
const router = express.Router();
const ethereumPriceController = require("../controllers/ethereumPriceController");

router.get("/ethereum-price", ethereumPriceController.getEthereumPrice);

module.exports = router;
