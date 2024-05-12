const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/balance/:address", userController.getUserBalance);

module.exports = router;
