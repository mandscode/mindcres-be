var express = require('express');
const { tabInfoConroller } = require('./tabInfo.conroller');
var router = express.Router();

/* GET home page. */
router.get("/tabs-info", tabInfoConroller);

module.exports = router;