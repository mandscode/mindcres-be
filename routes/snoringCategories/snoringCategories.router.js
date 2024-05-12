var express = require('express');
const { snoringCategoriesConroller } = require('./snoringCategories.conroller');
var router = express.Router();

/* GET home page. */
router.get("/snoring-categories", snoringCategoriesConroller);

module.exports = router;