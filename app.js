var express = require('express');
var app = express();
var http = require('http');
var path                    = require('path');
var bodyParser              = require('body-parser');
var validate = require('express-validator');
var product        = require('./controllers/product.controller');//Calling the product controller

app.use(validate());
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true, parameterLimit: 20000 }));
app.use('/product',product);

http.createServer(app).listen('2000', function(err){
    console.log("running in 2000 port");
});

//API URL

//http://localhost:2000/product/getProductsList

//http://localhost:2000/product/getCategoryProductcount
