var mongoose = require('mongoose');

var CronJob = require('cron').CronJob;

var Users = mongoose.model('user');

var Acts = mongoose.model('act');

// var timezones = ["America/Los_Angeles", 'America/Denver', 'America/Chicago', 'America/New_York'];

// for (var i = 0; i < timezones.length; i++) {
  

  var job = new CronJob({
    cronTime: '00 */1 * * * *',
    onTick: function() {
      /*
       * Runs every day (Sunday through Saturday)
       * at 08:00:00 AM. 
       */
      console.log("Here");
      Users.find({}, function(err, users){

        Acts.find({},function(err,acts){
          console.log(acts);

          var generatedDAK = acts[Math.floor(acts.length * Math.random())]._id;

          console.log(generatedDAK);
          updateUserAct(generatedDAK);
          // console.log("Users: ", users);
        })


        function updateUserAct(generatedID) {

          for(var i = 0; i < users.length; i++){
            users[i].acts.push({act_info: generatedID, completed: false});
            users[i].save(function(err, User){
              if(err){
                // res.send(err);
                console.log(err);
              }
              // } else {
              //   res.json(true);
              // }

            })
          }
        }

       
        
      

      })
    },
    start: true,
    timeZone: 'America/Los_Angeles'
  });

  job.start();







      
      // })

//   var job = new CronJob({
//     cronTime: '* * * * * 0-6',
//     onTick: function() {
//       /*
//        * Runs every day (Sunday through Saturday)
//        * at 08:00:00 AM. 
//        */
//       User.find({}, function(err){
//         this.generatedDAK = acts[Math.floor(acts.length * Math.random())]
//           console.log(this.generatedDAK);

//         user.acts.push({act_info: this.generatedDAK, completed: false});
//         user.save(function(err,User){
//           if(err){
//             res.send(err);
//           } else {
//             res.json(true);
//           }
//         })
// })



  


