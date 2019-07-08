var express = require('express');
var app = express();
var http = require('http');
var path                    = require('path');
var bodyParser              = require('body-parser');

// var mysql = require('mysql');
var validate = require('express-validator');
var con= require('./dbconfig/dbconfig.js');
var product        = require('./controllers/product.controller');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "",
//   password: "",
//   database: "rds_kvb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// app.get('/getcountry/',function(req,res){
//     con.query("SELECT * FROM ld_stamp_repository where stamp_paper_number = '53AB699282'", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//         res.json(result);
//       });
//     console.log("done");
  
// })
app.use(validate());
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true, parameterLimit: 20000 }));
app.use('/api/product',product);

// app.get('/getProductslist',function(req,res){
//     console.log('getProductslist');
//     // var deferred = Q.defer();
//     // con.tst_categories.find({},function(err,response){
//     //     console.log('err===',err);
//     //     console.log('response====',response);
//     //     if(response){
//     //         deferred.resolve({status:'success',products_data:response});
//     //     }
//     // })
// });

http.createServer(app).listen('2000', function(err){
    console.log("running in 2000 port");
})
