var mongoose = require('mongoose');
// var validate = require('mongoose-validator');
var validate_unique = require('mongoose-unique-validator');

var Schema = mongoose.Schema;


var userSchema = new Schema({
	name: String,
	// alias: { type: String, unique: true, required: true}, 'Someone is already using that alias, pick another!',

	alias: { 
		type: String,
		unique: true
		// message: 'Alias in use, please select a new alias'
	},

	email: { type: String, unique: true, required: true, match: /.+\@.+\..+/ },
	password: {type: String, required: true},
	friends: [{ type: Schema.Types.ObjectId, ref: 'Friends'}],
	done: [{ type: Schema.Types.ObjectId, ref: 'Done'}],
	pending: [{ type: Schema.Types.ObjectId, ref: 'Pending'}]
});
userSchema.plugin(validate_unique, {message: 'Error, expected {PATH} to be unique.'});

mongoose.model('User', userSchema);