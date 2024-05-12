var express = require('express');
const { productsConroller } = require('./products.conroller');
var router = express.Router();

/* GET home page. */
router.get("/get-products/content", productsConroller);

module.exports = router;