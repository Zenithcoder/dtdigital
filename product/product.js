var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price:String,
  company: String
});

mongoose.model('Product', ProductSchema);

module.exports = mongoose.model('Product');