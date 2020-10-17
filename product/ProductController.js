var express = require('express');
var bodyParser = require('body-parser');

var Product = require('./product');

var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

// CREATES A NEW PRODUCT
 
router.post('/', function (req, res) {
 
    Product.create({
            name : req.body.name,
            category : req.body.category, 
            price : req.body.price,
            company : req.body.company,
        },
        function (err, product) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(product);
        });
});

// RETURNS ALL THE PRODUCTS IN THE DATABASE
router.get('/', function (req, res) {
    Product.find({}, function (err, products) {
        if (err) return res.status(500).send("There was a problem finding the products.");
        res.status(200).send(products);
    });
});

// GETS A SINGLE Product FROM THE DATABASE
router.get('/:id', function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return res.status(500).send("There was a problem finding the product.");
        if (!product) return res.status(404).send("No product found.");
        res.status(200).send(product);
    });
});

// DELETES A Product FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err, product) {
        if (err) return res.status(500).send("There was a problem deleting the product.");
        res.status(200).send("Product "+ product.name +" was deleted.");
    });
});

// UPDATES A SINGLE Product IN THE DATABASE
router.put('/:id', function (req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, product) {
        if (err) return res.status(500).send("There was a problem updating the product.");
        res.status(200).send(product);
    });

});

module.exports = router;
