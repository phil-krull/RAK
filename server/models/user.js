var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	alias: { type: String, unique: true, required: true},
	email: { type: String, unique: true, required: true},
	password: {type: String, required: true},
	friends: [{ type: Schema.Types.ObjectId, ref: 'Friends'}],
	done: [{ type: Schema.Types.ObjectId, ref: 'Done'}],
	pending: [{ type: Schema.Types.ObjectId, ref: 'Pending'}]
});

mongoose.model('User', userSchema);