const s3 = require('../config/aws-config.js');
const db = require('../models');
const bucketName = 'nagarro-aws-training';
module.exports.addToCard = async (req, res) => {
    try {
        const { productId, addedBy } = req.body;
        const newCard = await db.Card.create({ productId, addedBy });
        
        res.status(201).json({
            message: 'Card added successfully',
            card: await db.Card.findAll()
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error adding card',
            error: error.message
        });
    }
}

module.exports.getCards = async (req, res) => {
    try {        
        res.status(201).json({
            message: 'Cards fetched successfully',
            card: await db.Card.findAll()
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error adding card',
            error: error.message
        });
    }
}