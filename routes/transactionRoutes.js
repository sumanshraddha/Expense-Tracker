const express = require("express");
const { addTransaction, getAllTransactions,editTransaction } = require("../controllers/transactionController");


//router object
const router = express.Router();

//routes
//add transaction || POST
router.post('/add-transaction',addTransaction);

//edit transaction || POST
router.post('/edit-transaction',editTransaction);


//get transactions
router.post('/get-transaction',getAllTransactions)


module.exports = router;
