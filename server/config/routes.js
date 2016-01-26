var mongoose = require('mongoose');

var Users = require('./../controllers/users.js');

var Acts = require('./../controllers/acts.js');



module.exports = function(app) {
	app.post('/users', Users.create)


	app.post('/users', Users.addAct)

	app.post('/users/:id' , Users.addFriend)

	app.get('/users', Users.index)

  app.get('/acts', function(req, res) {
    Acts.index(req, res)
  })

  app.post('/acts', function(req, res) {
    Acts.create(req, res)
  })

  app.post('/acts/' + user._id, function(req, res) {
    Acts.update(req, res)
  })

}