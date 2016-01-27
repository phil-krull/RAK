var mongoose = require('mongoose');
// var validate = require('mongoose-validator');
var validate_unique = require('mongoose-unique-validator');

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
	done: [{ type: Schema.Types.ObjectId, ref: 'Done', added_at: {type:Date, default: Date.now}}],
	pending: [{ type: Schema.Types.ObjectId, ref: 'Pending', created_at: { type: Date, default: Date.now}}]
});
usersSchema.plugin(validate_unique, {message: 'Error, expected {PATH} to be unique.'});

mongoose.model('user', usersSchema);