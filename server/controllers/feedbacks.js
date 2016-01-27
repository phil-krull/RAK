var mongoose = require('mongoose');

var Feedback = mongoose.model('feedback');

module.exports = {
	create: function (req,res){
		var newFeedback = new Feedback(req.body);
		newFeedback.save(function(err, feedback){
			if(err){
				res.send(err);
			} else {
				res.json(true);
			}
		})
		
		}
	}
