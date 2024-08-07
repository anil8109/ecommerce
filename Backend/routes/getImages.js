const { getImage } = require('../controller/getFiles.js');
var express = require('express');
router = express.Router();

router.get('/getImages', getImage);

module.exports = router;