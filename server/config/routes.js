var mongoose = require('mongoose');

var Users = require('./../controllers/users.js');

var Acts = require('./../controllers/acts.js');

var Pictures = require('./../controllers/pictures.js');



module.exports = function(app) {
	app.post('/users', Users.create)

	// app.post('/users', Users.addAct)

	app.post('/friends/:id' , Users.addFriend)

	app.get('/users', Users.index)

  app.get('/acts', function(req, res) {
    Acts.index(req, res)
  })

  app.post('/loginuser', function(req, res) {
  
    Users.login(req, res);
  })

  app.post('/acts', function(req, res) {
    Acts.create(req, res)
  })

  app.get('/users/:id', function(req, res) {
    Users.show(req,res);
  })

  app.post('/acts/:id', function(req, res) {
    Acts.update(req, res)
  })

  

}