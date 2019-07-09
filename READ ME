Please find the details below to know about the files and the functionality.

app.js is the node server file.

Here we have 2 folders controllers and the services.

In app.js we are importing the controllers.
From controllers we will call the respective functions.

This folder structure will help us to identify the different modules easily, here the handling will become easy for big projects.

I have created 2 API for fetching the categories along with respective product count.
Below given are the API URL's.

1. http://localhost:2000/product/getCategoryProductcount

OutPut:{
    "status": "success",
    "result": [
        {
            "_id": "5d22d7ad12a310c17131a437",
            "category_name": "cat1",
            "created_at": "2019-07-08T00:00:00+05:30",
            "count": 5
        },
        {
            "_id": "5d22d89312a310c17131a450",
            "category_name": "cat2",
            "created_at": "2019-07-08T00:00:00+05:30",
            "count": 4
        },
        {
            "_id": "5d22d89912a310c17131a456",
            "category_name": "cat3",
            "created_at": "2019-07-08T00:00:00+05:30",
            "count": 5
        },
        {
            "_id": "5d22d8a412a310c17131a45a",
            "category_name": "cat4",
            "created_at": "2019-07-08T00:00:00+05:30",
            "count": 8
        },
        {
            "_id": "5d22d8b212a310c17131a45e",
            "category_name": "cat5",
            "created_at": "2019-07-08T00:00:00+05:30",
            "count": 8
        },
        {
            "_id": "5d22d8ba12a310c17131a462",
            "category_name": "cat6",
            "created_at": "2019-07-08T00:00:00+05:30",
            "count": 0
        }
    ]
}

2. http://localhost:2000/product/getProductsList

OutPut: {
    "status": "success",
    "result": [
        {
            "_id": "5d22d8a412a310c17131a45a",
            "count": 8,
            "data": [
                {
                    "category": "cat4"
                }
            ]
        },
        {
            "_id": "5d22d89912a310c17131a456",
            "count": 5,
            "data": [
                {
                    "category": "cat3"
                }
            ]
        },
        {
            "_id": "5d22d89312a310c17131a450",
            "count": 4,
            "data": [
                {
                    "category": "cat2"
                }
            ]
        },
        {
            "_id": "5d22d8b212a310c17131a45e",
            "count": 8,
            "data": [
                {
                    "category": "cat5"
                }
            ]
        },
        {
            "_id": "5d22d7ad12a310c17131a437",
            "count": 5,
            "data": [
                {
                    "category": "cat1"
                }
            ]
        }
    ]
}




