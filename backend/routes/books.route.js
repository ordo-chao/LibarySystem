const express = require("express");
const router = express.Router();


const { createBook , getBook } = require("../controllers/books.controller");
router.post("/create", createBook);
router.post("/getBook", getBook);
module.exports = router;