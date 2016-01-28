var mongoose = require('mongoose');

var Comments = mongoose.model('comment');


module.exports = {
	create: function (req,res){
		var newComment = new Comment({
			name: req.body.name,
			alias: req.body.alias,
			email: req.body.email,
			comment: req.body.comment
		})
		newComment.save(function(err, comment){
			if(err){
				res.send(err);
			} else {
				res.json(comment);
			}
		})
	}
}