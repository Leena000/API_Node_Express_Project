const express = require("express");
const router = express.Router();

const inc = require("../controllers/incomecontroller");

router.get("/", inc.getIncome);
router.post("/", inc.addIncome);
router.put("/:id", inc.updateIncome);
router.delete("/:id", inc.deleteIncome);

module.exports = router;