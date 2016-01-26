var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	alias: String,
	email: String,
	password: String,
	friends: [{ type: Schema.Types.ObjectID, ref: 'Friends'}]
});

mongoose.model('User', userSchema);