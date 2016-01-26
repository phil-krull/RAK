var mongoose = require('mongoose');

var Acts = mongoose.model('act');
var Users = mongoose.model('User');


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
      new_act.save(function(errors, act) {
        if(errors) {
          res.send(errors)
        } else {
          res.json(act)
        }
      })
    },

    update: function(req, res) {
      User.findOne({_id: req.params.id}, function(errors, user) {
        user.pending.push(req.body.actId);
        user.save(function(errors) {
          if(errors) {
            res.send(errors)
          } else {
            res.json(true)
          }
        })
      })
    }

}