const router = require("express").Router();
const {addExpenses,getExpenses} = require('../controllers/expenses.controllers')

const authenticateToken = require('../middlewares/authorization')

router.post("/:id/expenses",authenticateToken, addExpenses);
router.get("/:id/expenses",authenticateToken, getExpenses);
// router.get("/:id/churches/:church_id",authenticateToken, getChurch)
// router.put("/:id/churches/:church_id",authenticateToken, updateChurch)
// router.delete("/:id/churches/:church_id",authenticateToken, deleteChurch);


module.exports = router;
