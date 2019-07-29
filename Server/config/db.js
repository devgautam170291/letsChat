const system = require('../lib/system')
const path = require('path');
const ENV = require('dotenv').config({path: path.join(system.baseDir, '.env')});

const config = {
    "development": {
        dbName: 'letsChat',
        username: 'root',
        password: '',
        port: 3306,
        host: 'localhost',
        dialect: 'mysql'
    },
    "production": {
        dbName: 'letsChat',
        username: 'root',
        password: '',
        port: 3306,
        host: 'localhost',
        dialect: 'mysql'
    }
}

module.exports = config[process.env.NODE_ENV];