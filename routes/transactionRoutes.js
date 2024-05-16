const express = require("express");
const {
  addTransaction,
  getAllTransactions,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");


//router object
const router = express.Router();

//routes
//add transaction || POST
router.post('/add-transaction',addTransaction);

//edit transaction || POST
router.post('/edit-transaction',editTransaction);
//delete transaction || POST
router.post('/delete-transaction',deleteTransaction);


//get transactions
router.post('/get-transaction',getAllTransactions)


module.exports = router;
