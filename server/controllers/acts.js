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
      var new_act = new act(req.body);
      new_act.save(function(errors, act) {
        if(errors) {
          res.send(errors)
        } else {
          res.json(act)
        }
      })
    },

    update: function(req, res) {
      User.findOne({_id: req.body.userId}, function(errors, user) {
        User.pending.push(req.body.actId);
        User.save(function(errors) {
          if(errors) {
            res.send(errors)
          } else {
            res.json(true)
          }
        })
      })
    }

}