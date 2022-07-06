//jshint esversion:6

const Product = require("../models/product.model");

/*exports.create = function(req, res){
    res.send("Greetings from the test controller")
};*/

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );
    console.log("----------------------------");
    console.log(req.body.name);
    console.log(req.body.price);
    console.log("----------------------------");

    product.save(function (err) {
        if (err) {
            console.log(err);
            return res.send('Product Not Created');
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            console.log(err);
            return res.send('Details not found');
        };
        res.send(product);
    });
};

exports.product_update = function (req, res) {
    console.log(req.params.id);
    Product.findByIdAndUpdate(req.params.id, {$set: req.body }, function (err, product) { 
        if (err) {
            console.log(err);
            return res.send('Product Not Updated');
        }
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            console.log(err);
            return res.send('product not deleted');
        };
        res.send('Deleted successfully!');
    })
};


