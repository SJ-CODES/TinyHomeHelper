const express = require("express");

const { signin } = require("../controllers/controller.user");

const router = express.Router();

router.post("/signin", signin);

module.exports = router;
