const express = require("express");
const controller = require("../controller/controller.js");

const router = express.Router();

router.get("/", controller.getAllEmp);
router.post("/add", controller.addEmp);
router.patch("/update/:id", controller.updateEmp);
router.delete("/delete/:id", controller.deleteEmp);

module.exports = router;
