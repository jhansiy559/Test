// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "rds_kvb"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

//   module.exports = con;

//Mongodb connection

var mongojs = require('mongojs');

module.exports = mongojs('mongodb://localhost:27017/appiness',
['appiness']
);