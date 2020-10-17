var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
var ProductController = require('./product/ProductController');
app.use('/users', UserController);
app.use('/products', ProductController);

app.get('/', function(req, res) {
  res.status(200).send('Welcome to the DT Digital');
})

module.exports = app;
