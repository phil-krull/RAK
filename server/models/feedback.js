var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
	first_name : String,
	last_name : String,
	email : String,
	comment : String
})

mongoose.model('feedback', feedbackSchema);