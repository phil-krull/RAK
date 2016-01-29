var mongoose = require('mongoose');

var Acts = mongoose.model('act');
var User = mongoose.model('user');


module.exports = {

    index: function(req, res) {

      Acts.find({}, function(errors, acts) {

        if(errors) {
          res.send(errors)
        } else {
          res.json(acts)
        }
      })
    },

    create: function(req, res) {
      var new_act = new Acts(req.body);
      new_act.approval = true;
      new_act.save(function(errors, act) {
        if(errors) {
          res.send(errors)
        } else {
          res.json(act)
        }
      })
    },

    update: function(req, res) {
        Acts.findByIdAndUpdate(req.params.id, {$push:{users: req.body.userId, user_ratings: req.body.user_ratings, approval_rating: req.body.approval_rating}}, function(errors, currentact) {
          var user_rating = 0;
          var approval = 0;

          for(var i = 0; i < currentact.user_ratings.length; i++) {
            user_rating += currentact.user_ratings[i];
          }
          currentact.avg_rating = Math.floor(user_rating/currentact.user_ratings.length);

          for(var i = 0; i < currentact.approval_rating.length; i++) {
            approval += currentact.approval_rating[i];
          }
          currentact.avg_approval = (approval/currentact.approval_rating.length);

          if(currentact.avg_approval < 0.3 && currentact.approval_rating.length > 50) {
            currentact.approval = false;
          }
            currentact.save();

            

        if(errors) {
          res.send(errors)
        } else {
          res.json(true)
        }
      })
    }

}