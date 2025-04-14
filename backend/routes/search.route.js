const express = require("express");
const router = express.Router();

const {filterController , searchController } = require("../controllers/searchPage.controller");

router.post("/filter", filterController);
router.post("/", searchController);

module.exports = router;
