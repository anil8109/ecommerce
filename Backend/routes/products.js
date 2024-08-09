const { getProducts } = require('../controller/products.js');
var express = require('express');
router = express.Router();

router.get('/getProducts', getProducts);

module.exports = router;