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
      console.log( req.body.recommend)
      console.log( req.body.actrating)
      console.log(typeof req.body.actID)
      console.log(req.params.id)

        Acts.find({ }, function(err, acts) {
          console.log(acts)
        })

        Acts.findOne({ _id: req.params.id}, function(err, act) {
          console.log(act);
        })

        Acts.findByIdAndUpdate(req.params.id, {$push:{users: req.body.userID, user_ratings: req.body.actrating, approval_rating: req.body.recommend}}, function(errors, currentact) {
          var user_rating = 0;
          var approval = 0;

          console.log(currentact)

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


          User.findOne({_id: req.body.userID}, function(err, user){
            for(var i = 0; i < user.acts.length; i++){
              if(user.acts[i].act_info == req.body.actID){
                user.acts[i].completed = true;
                user.save(function(err, user){
          //         if(err){
          //           res.send(err);
          //         } else {
          //           res.json(user);
          // }
        })
        }
      }

      
    })



        if(errors) {
          res.send(errors)
        } else {
          res.json(true)
        }
      })
    }

}