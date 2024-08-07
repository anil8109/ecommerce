// config/awsConfig.js
const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

AWS.config.update({
});

const s3 = new AWS.S3();
module.exports = s3;
