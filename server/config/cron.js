var CronJob = require('cron').CronJob;


var mongoose = require('mongoose');

// var Acts = mongoose.model('act');
var Users = mongoose.model('User');

var timezones = ["America/Los_Angeles", 'America/Denver', 'America/Chicago', 'America/New_York'];

for (var i = 0; i < timezones.length; i++) {
  

  var job = new CronJob({
    cronTime: '00 08 * * * 0-6',
    onTick: function() {
      /*
       * Runs every day (Sunday through Saturday)
       * at 08:00:00 AM. 
       */
       Users.find({}, function(err, user){
        user.pending.push(req.body.actID);
        user.save(function(err, user){
          if(err){
            res.send(err);
          } else {
            res.json(user);
          }
        })
       })



    },
    start: true,
    timeZone: timezones[i]
  });

  job.start();
};