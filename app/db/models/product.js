// Smaple js file

// Logs -- {topic_id: string,
//            user_id: string,
//            timestamp: number
//            type: string
//            content: string,
//            score: integer}
Products = new Mongo.Collection("products");
Product = Model(Products);

//Use a package library stupid models
Product.extend({
 defaultValues: {
 },
});

