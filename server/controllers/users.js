var mongoose = require('mongoose');

var User = mongoose.model('user');
var bcrypt = require('bcrypt');
var act = mongoose.model('act');

module.exports = {
	login: function(req, res) {
		console.log(req.body.email);
		console.log(req.body.password);

		User.findOne({email: req.body.email}, function(err, user) {

			console.log(user);
			console.log(user.password);

			if (bcrypt.compareSync(req.body.password, user.password) === true) {
				res.json(user);

			} else {
				res.json("wrong email or wrong password");
			}

		});	

	},
	create: function(req,res){

		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(req.body.password, salt);


		var newUser = new User({
			name: req.body.name,
			alias: req.body.alias,
			email: req.body.email,
			password: hash
		})



		newUser.save(function(err, newUser){
			if(err){
				console.log(err);
				res.send(err);
			} else{
				res.json(newUser);
			}
		})
	},
	update: function(req,res){
		User.findOne({_id: req.params.id}, function(err, users){
			user.acts.completed = req.body.acts.completed;
			user.save(function(err, user){
				if(err){
					res.send(err);
				} else {
					res.json(user);
				}
			})
		})
	},


	addFriend: function(req,res){
		User.findOne({_id: req.params.id}, function(err, user){
			console.log(user);
			user.friends.push(req.body.friendID);

			user.save(function(err,User){
				if(err){
					res.send(err);
				} else {
					res.json(User);
				}
			})
		})
	},
	destroy: function(req,res){
		User.findOne({_id: req.params.id}, function(err, user){
			console.log(user);
			user.friends.splice(req.body.friendID);
			user.save(function(err, user){
				if(err){
					res.send(err);
				} else {
					res.json(user);
				}
			})

		})
	},
	show: function(req,res){
		User.findOne({_id: req.params.id}, function(err, user){
			if(err){
				res.json(err);
			} else {
				res.json(user)
			}
		})
	},


	// addCompleted: function(req,res){
	// 	User.findOne({_id: req.body.userID}, function(err, act){

	// 	})
	// },
	index: function(req,res){
		User.find({}, function(err, users){
			if(err){
				res.send(err);
			} else {
				res.json(users);
			}
		})
	}
}