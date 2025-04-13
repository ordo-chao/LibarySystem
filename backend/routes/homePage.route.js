const express = require("express");
const router = express.Router();

const { GuestController , UserPageController} = require("../controllers/homePage.controller");

router.get("/guest", GuestController);
router.post("/user", UserPageController);

module.exports = router;