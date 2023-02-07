const express = require("express");
const {
  addTransaction,
  getAllTransaction,
} = require("../controllers/transactionCtrl");

// Router object
const router = express.Router();

// Add Transaction using the Post method
router.post("/add-transaction", addTransaction);

// Get Transaction using the Get method
router.post("/get-transaction", getAllTransaction);

module.exports = router;
