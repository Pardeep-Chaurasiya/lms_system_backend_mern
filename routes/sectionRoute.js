const express = require("express");
const sectionController = require("../controllers/sectionController");
const router = express.Router();

router.put("/newsection", sectionController.newSection);

module.exports = router;
