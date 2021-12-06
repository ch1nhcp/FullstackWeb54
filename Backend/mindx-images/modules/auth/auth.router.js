//api/auth
const router = require("express").Router();
const authController = require("./auth.controller");

//Dang ky, post

router.post("/signup", authController.signUp);
router.post("/login", authController.login);

module.exports = router;
