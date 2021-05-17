const express = require("express");
const authUser = require("../controllers/userController.js");
const registerUser = require("../controllers/userController.js");
const protect = require("../middleware/authMiddleware.js");

const router = express.Router();
router.route("/").post(registerUser).get(protect);
router.post("/login", authUser);
router.post("/registration", registerUser);

module.exports = router;
