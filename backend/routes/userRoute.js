const express = require("express");
const userController = require("../controllers/userController.js");

const router = express.Router();

router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.post("/logout", userController.logout);
// router.route("/add_to_activity");
// router.route("/get_all_activity");

module.exports = router;
