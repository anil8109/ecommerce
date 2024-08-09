module.exports = (sequelize, Sequelize) => {
    const Card = sequelize.define("card", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productId: {
            type: Sequelize.INTEGER
        },
        addedBy: {
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
    return Card;
};
