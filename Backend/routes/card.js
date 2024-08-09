const { addToCard, getCards } = require('../controller/card.js');
var express = require('express');
router = express.Router();

router.get('/addToCard', addToCard);
router.get('/getCards', getCards);

module.exports = router;