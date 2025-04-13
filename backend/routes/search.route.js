const express = require("express");
const router = express.Router();

const {filterController , searchController } = require("../controllers/searchPage.controller");

router.post("/", filterController);
router.post("/search", searchController);

module.exports = router;
