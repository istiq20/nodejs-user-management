const Sequelize = require('sequelize');

// Create Sequelize Instance
const db = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'database_ums',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

// Establish The Connection
db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = db;