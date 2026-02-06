
const express = require("express");
const router = express.Router();

const exp = require("../controllers/expensecontroller");

router.get("/",exp.getExpenses);
router.post("/", exp.addExpense);
router.put("/:id", exp.updateExpense);
router.delete("/:id", exp.deleteExpense);

module.exports = router;