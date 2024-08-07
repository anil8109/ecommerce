const s3 = require('../config/aws-config.js');
const bucketName = 'nagarro-aws-training';
module.exports.getImage = async (req, res) => {
    const params = {
        Bucket: bucketName, // Replace with your bucket name
    };
    try {
        const data = await s3.listObjectsV2(params).promise();
        
        // Construct URLs for each object
        const imageUrls = data.Contents.map(item => {
            return `https://${bucketName}.s3.${'us-east-2'}.amazonaws.com/${item.Key}`;
        });
        res.status(200).json(imageUrls);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}