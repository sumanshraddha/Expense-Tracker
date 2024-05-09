const express = require("express");
const { addTransaction, getAllTransactions } = require("../controllers/transactionController");


//router object
const router = express.Router();

//routes
//add transaction || POST
router.post('/add-transaction',addTransaction);

//get transactions
router.post('/get-transaction',getAllTransactions)


module.exports = router;
