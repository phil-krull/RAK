var mongoose = require('mongoose');
// var validate = require('mongoose-validator');
var validate_unique = require('mongoose-unique-validator');

var mongoose

var Schema = mongoose.Schema;

var usersSchema = new Schema({
	name: String,
	alias: { 
		type: String,
		unique: true
	},
	email: { type: String, unique: true, required: true, match: /.+\@.+\..+/ },
	password: {type: String, required: true},
	friends: [{ type: Schema.Types.ObjectId, ref: 'Friends'}],
	acts: [{
		act_info: {type: Schema.Types.ObjectId, ref: 'Acts' },
		created_at: Date,
		updated_at: Date,
		completed: Boolean
	}]
	
});
usersSchema.plugin(validate_unique, {message: 'Error, expected {PATH} to be unique.'});

mongoose.model('user', usersSchema);