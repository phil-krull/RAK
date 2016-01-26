var mongoose = require('mongoose');

var User = mongoose.model('User');

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
				res.send(err);
			} else{
				res.json(true);
			}
		})
	},
	index: function(req,res){
		User.find({}, function(err, users){
			if(err){
				res.send(err);
			} else {
				res.json(true);
			}
		})
	}
}