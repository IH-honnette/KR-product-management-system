require('dotenv').config();
const mysql = require('mysql2');
const { log } = require('../utils/logger');

const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE
} = process.env;

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});

connection.connect((error) => {
    if(error) log.error ('DATABASE STATE', error.message)
    else  log.success ('DATABASE STATE', 'Database connected successfully');
});

connection.on('error', (error) => {
    log.error('DATABASE STATE', error.message)
});

module.exports = connection;