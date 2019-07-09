var database = require('../dbconfig/dbconfig.js');
var Q = require('q');
var _ = require('underscore');
var mongojs = require('mongojs');

var order = {};
order.getProductsList = getProductsList;
order.getCategoryProductcount = getCategoryProductcount;

module.exports = order;

function getProductsList(params){
 var deferred = Q.defer();
    try{

        database.tst_categories.aggregate([
            { $match: {}},
            {$lookup: 
                {from: "tst_products",localField: "_id",foreignField: "category_id",as: "productData"}
            },
            { "$unwind": "$productData" },
            {
                "$group": {
                    "_id": "$productData.category_id",                    
                    "data": {
                        "$push": {
                        "id": "$id",
                        "category": "$category_name"
                        }  
                     },
                     "count": { "$sum": 1 }               
                }
            },            
            {
                "$project": {
                    "_id": true,
                    "count": true,
                    "data": {
                        "$slice": [
                            "$data",
                            {
                                "$const": 1
                            }
                        ]
                    }
                }
            }
        ], function (err, response) {
              if(err){
                console.log('error fetching data',err);
              }else{
               deferred.resolve({status:'success', result:response})
              }

        });
    }catch(exception){
        console.log(exception);
    }
    return deferred.promise;
}

//Second pattern

function getCategoryProductcount(params){
    var deferred = Q.defer();
    try{
        database.tst_categories.find({},function(err,response){
            if(err){
                console.log('err===',err);
            }else if(response){
                var datacount = response.length;
                var index = 0;
                _.each(response, function(category){
                    database.tst_products.count({category_id:mongojs.ObjectId(category._id)},function(err,product_count){
                        category['count'] = product_count;
                        index++;
                        if(datacount == index){
                            deferred.resolve({status:'success',result:response});
                        }
                    });
                });
                 
              }
          });
    }catch(exception){
        console.log(exception);
    }
    return deferred.promise;
}