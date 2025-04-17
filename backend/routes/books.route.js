const express = require("express");
const router = express.Router();
const upload = require("../middleware/Upload");

const { createBook , getBook , getTrending , getonSale , getRecommended , getGenre } = require("../controllers/books.controller");
router.post("/create", upload, createBook);
router.post("/getBook", getBook);
router.get('/trending' , getTrending)
router.get('/onSale' , getonSale)
router.get('/recommended' , getRecommended)
router.get('/genre' , getGenre)

module.exports = router;