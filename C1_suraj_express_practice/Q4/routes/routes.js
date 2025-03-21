const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.get("/hello", controller.getHelloPage);

module.exports = router;
