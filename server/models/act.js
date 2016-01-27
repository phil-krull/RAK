var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var actsSchema = new Schema({
  name: String,
  users: [{name: Schema.Types.ObjectId}],
  user_ratings: [],
  avg_rating: Number,
  approval_rating: [],
  avg_approval: Number,
  approval: Boolean
})

mongoose.model('act', actsSchema);