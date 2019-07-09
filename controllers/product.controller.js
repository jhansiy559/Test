const express = require('express');
const router = express.Router();
var productService 	= require('../services/product.service');

router.get('/getCategoryProductcount', getCategoryProductcount);
router.get('/getProductsList', getProductsList);

module.exports = router;

function getCategoryProductcount(req,res){
	productService.getCategoryProductcount(req.body).then(function (response) {
		if(response.status=='success') {
		res.send({status: "success", result: response.result});
		}else {
		res.send({status: "failed", message: response.message});
		}
	}).catch(function(err){
		res.send({status: "failed", message: response.message});
	});
}

function getProductsList(req,res){
	productService.getProductsList(req.body).then(function (response) {
		if(response.status=='success') {
		res.send({status: "success", result: response.result});
		}else {
		res.send({status: "failed", message: response.message});
		}
	}).catch(function(err){
		res.send({status: "failed", message: response.message});
	});
}