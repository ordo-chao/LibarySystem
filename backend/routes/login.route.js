const express = require("express");
const router = express.Router();


const { getRouter} = require("../controllers/login.controller");

router.post("/login", getRouter);

module.exports = router;