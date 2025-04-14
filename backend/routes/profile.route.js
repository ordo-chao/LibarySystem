const express = require("express");
const router = express.Router();


const { getProfile , createUser } = require("../controllers/profile.controller");
router.post("/get", getProfile);
router.post("/create", createUser);
module.exports = router;