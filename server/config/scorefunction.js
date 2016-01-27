var mongoose = require('mongoose');

var Users = mongoose.model('User');

var Acts = mongoose.model('Act');


// for calculating kindness score

// score based on points earned divded by number of acts completed
// points based on length of time it takes to complete an act (from "random generation" to "completion")
			// 0-4 hrs = 5 points
			// 4-8 hrs = 4 points
			// 8-12 hrs = 3 points
			// 12-16 hrs = 2 points
			// 16-20 hrs = 1 point
			// 20-24 hrs = 0 points
// to find hours elapsed, subtract time added to done from time added to pending
function points(req,res){
	Users.findOne({_.id: req.params.id}, function(err, user){
		
		 var timeElapsed = (user.done.created_at) - (user.pending.created_at);
		 if () 

	})
}



// if avg is 4+ platinum
// if avg is 3+ gold
// if avg is 2+ silver
// if avg is 1+ bronze
// if avg is 0+ wood 

function kindScore(req,res){
	Users.findOne({_.id: req.params.id});
	var count = Users.done.length + 1;

}
