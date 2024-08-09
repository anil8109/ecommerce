// config/awsConfig.js
const AWS = require('aws-sdk');
require('dotenv').config()

AWS.config.update({

});

const s3 = new AWS.S3();
module.exports = s3;
