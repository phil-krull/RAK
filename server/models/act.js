var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose)

var actsSchema = new Schema({
  name: String,
  users: [{type: Schema.Types.ObjectId, ref: 'user'}],
  user_ratings: [Number],
  avg_rating: Number,
  approval_rating: [Number],
  avg_approval: Number,
  approval: Boolean,
  created_at: Date

})


mongoose.model('act', actsSchema);

actsSchema.plugin(deepPopulate)
