//Import Expense

const express = require("express");

//create router
const router = express.Router();

//Import controller
const user = require("../controllers/userController");

//define Routes
router.get("/", user.getUsers);
router.get("/:id", user.getUsers);
router.post("/", user.addUser);
router.put("/:id", user.updateUser);
router.delete("/:id", user.deleteUser);

//export Router
module.exports = router;