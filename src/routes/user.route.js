const router = require("express").Router();
const {
  signUp,
  signIn,
} = require("../controllers/user.controllers");
const {
  signUpValidation,
  signInValidation,
} = require("../validation/user.validations");

// const authenticateToken = require('../middlewares/authorization')

router.post("/signUp", signUpValidation, signUp);
router.post("/signIn", signInValidation, signIn);
// router.get("/verified",verified);
// router.get("/verify/:id/:string",verifyEmail);
// router.put("/update/:id", updateValidation,authenticateToken, update);
// router.put("/updatepassword/:id", updatepasswordvalidation,authenticateToken, updatepassword);
// router.get("/:id",authenticateToken, getUserbyid);
// router.delete("/:id", authenticateToken,delete_user);

module.exports = router;
