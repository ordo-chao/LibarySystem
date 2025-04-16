const express = require("express");
const router = express.Router();
const verify = require("../controllers/verify.controller");


router.post("/", verify);
module.exports = router;