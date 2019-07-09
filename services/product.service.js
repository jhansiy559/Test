var database = require('../dbconfig/dbconfig.js');
var Q = require('q');
var _ = require('underscore');
var mongojs = require('mongojs');

var order = {};

order.getCategoryProductcount = getCategoryProductcount;
order.getProductsList = getProductsList;


module.exports = order;

//Model 1

//Author1: Jhansi
//Date: 09-07-2019
//Function: getCategoryProductcount()
//Description: 
//Step1: Fetching all the categories.
//Step2: Using _.each loop get the products count of each category.
//Step3: Push the count to the respective category array.

//Return: Finally we will get the categories and respective product count in the response

//Examples of Usage: (API URL: http://localhost:2000/product/getCategoryProductcount)

//ANS: {
//     "status": "success",
//     "result": [
//         {
//             "_id": "5d22d7ad12a310c17131a437",
//             "category_name": "cat1",
//             "created_at": "2019-07-08T00:00:00+05:30",
//             "count": 5
//         }
//     ]
// }

function getCategoryProductcount(params){
    var deferred = Q.defer();
    try{
        database.app_categories.find({},function(err,response){
            if(err){
                console.log('err===',err);
            }else if(response){
                var datacount = response.length;
                var index = 0;
                _.each(response, function(category){
                    database.app_products.count({category_id:mongojs.ObjectId(category._id)},function(err,product_count){
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

//Model 2

//Author1: Jhansi
//Date: 09-07-2019
//Function: getCategoryProductcount()
//Description: 
//Here I used aggregate and lookup to join the 2 collections.
//by grouping the categort id in the app_products collection we will get the count of products for the respective categories 

//Return: Finally we will get the categories and respective product count in the response

//Examples of Usage: (API URL: http://localhost:2000/product/getCategoryProductcount)

//ANS: {
//     "status": "success",
//     "result": [
//         {
//             "_id": "5d22d8a412a310c17131a45a",
//             "count": 8,
//             "data": [
//                 {
//                     "category": "cat4"
//                 }
//             ]
//         }
//     ]
// }

function getProductsList(params){
 var deferred = Q.defer();
    try{

        database.app_categories.aggregate([
            { $match: {}},
            {$lookup: 
                {from: "app_products",localField: "_id",foreignField: "category_id",as: "productData"}
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
