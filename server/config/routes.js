var mongoose = require('mongoose');
var Users = require('./../controllers/users.js');

module.exports = function(app) {
	app.post('/users', Users.create)

	app.post('/users', Users.addAct)

	app.post('/users/:id', Users.addFriend)

	app.get('/users', Users.index)
}