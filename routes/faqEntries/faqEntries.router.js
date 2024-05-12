var express = require('express');
const { faqEntriesConroller } = require('./faqEntries.conroller');
var router = express.Router();

/* GET home page. */
router.get("/faq-entries", faqEntriesConroller);

module.exports = router;