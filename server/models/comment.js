var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentsSchema = new Schema({
	name: String,
	alias: String,
	email: String,
	comment: String
});


mongoose.model('comment', commentsSchema);
