var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  occupation: String,
  email:String
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');