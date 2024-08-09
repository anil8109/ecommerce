const s3 = require('../config/aws-config.js');
const db = require('../models');
const bucketName = 'nagarro-aws-training';
module.exports.getProducts = async (req, res) => {
    const params = {
        Bucket: bucketName, // Replace with your bucket name
    };
    try {
        const products = await db.Product.findAll();
        const productList = products.map(product => {
            product.dataValues.imgUrl = `https://${bucketName}.s3.${'us-east-2'}.amazonaws.com/${product.dataValues.keyName}`;
            return product;
        });
        res.status(200).json(productList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}