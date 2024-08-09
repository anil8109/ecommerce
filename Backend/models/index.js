const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.databaseName, process.env.usersName, process.env.password,{
    host: process.env.host,
    dialect: process.env.dialect,
    operatorAliases: false,
    // port: process.env.port,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
})

console.log(process.env.databaseName, process.env.userName, process.env.password, process.env.host, process.env.dialect);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Product = require('./products.js')(sequelize, Sequelize);
db.Card = require('./card.js')(sequelize, Sequelize);

module.exports = db;