var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var actsSchema = new Schema({
  name: String,
  users: [{name: Schema.Types.ObjectId}],
  rating: [{rating: Number}],
  
})

mongoose.model('act', actsSchema);