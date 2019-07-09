var express = require('express');
var app = express();
var http = require('http');
var path                    = require('path');
var bodyParser              = require('body-parser');

// var mysql = require('mysql');
var validate = require('express-validator');
var con= require('./dbconfig/dbconfig.js');
var product        = require('./controllers/product.controller');

app.use(validate());
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true, parameterLimit: 20000 }));
app.use('/product',product);

http.createServer(app).listen('2000', function(err){
    console.log("running in 2000 port");
});

//API URL

//http://localhost:2000/product/getProductsList
