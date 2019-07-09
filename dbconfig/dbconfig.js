
//Mongodb connection

var mongojs = require('mongojs');

module.exports = mongojs('mongodb://localhost:27017/appiness',
['appiness']
);