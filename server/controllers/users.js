var mongoose = require('mongoose');

var User = mongoose.model('User');

// var act = mongoose.model('act');

module.exports = {
	create: function(req,res){
		var newUser = new User({
			name: req.body.name,
			alias: req.body.alias,
			email: req.body.email,
			password: req.body.password
		})
		newUser.save(function(err, newUser){
			if(err){
				console.log(err);
				res.json(err);
			} else{
				res.json(true);
			}
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
	show: function(req,res){
		User.findOne({_id: req.params.id}, function(err, user){
			if(err){
				res.json(err);
			} else {
				res.json(user)
			}
		})
	},

	// addAct: function (req,res){
	// 	User.findOne({_id: req.body.userID}, function (err, act){
	// 		users.pending.push(req.body.actsID);
	// 		User.save(function(err, act){
	// 			if(err){
	// 				res.send(err);
	// 			} else {
	// 				res.json(act);
	// 			}
	// 		})
	// 	})
	// },
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