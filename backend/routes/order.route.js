const express = require("express");
const router = express.Router();

const {createOrder , getOrder} = require("../controllers/order.controller");

router.post("/createOrder", createOrder);
router.post("/getOrder", getOrder);

module.exports = router;
