const express = require("express");
const router = express.Router();

const { getWishlist, createWishlist} = require("../controllers/wishlist.controller.JS");
router.post("/getWishlist", getWishlist);
router.post("/createWishlist", createWishlist);
module.exports = router;