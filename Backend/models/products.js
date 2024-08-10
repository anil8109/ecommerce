module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        },
        keyName: {
            type: Sequelize.STRING
        },
        createdBy: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    });
    return Product;
};
