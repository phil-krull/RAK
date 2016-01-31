dak_app.controller('leaderdashboardController', function(actFactory, userFactory) {
	var _this = this;


  function getActs() {
    actFactory.index(function(acts) {
      _this.acts = acts;
      console.log(acts);
    })
  }

  function getUsers() {
    userFactory.index(function(users) {

       console.log(users);

       for(z = 0; z < users.length; z++) {

          if(users[z].acts != 0) {
            var ratings = [];
            var total = 0;

            for(i = 0; i < users[z].acts.length; i++) {

              if(users[z].acts[i].completed === true) {

                if(users[z].acts[i].act_info.avg_rating != 0) {

                  ratings.push(users[z].acts[i].act_info.avg_rating)
                  
                }

              }

            }

            if(ratings != 0) {

              for(j = 0; j < ratings.length; j++) {
                total += ratings[j]
              }

              var num = total/ratings.length

              users[z].rating = num.toFixed(1);
              
            } else if(ratings == 0) {
              users[z].rating = "No Rating"
            }
          } else {
            users[z].rating = "No Rating";
          }
       }
    
      _this.users = users;

    })

  }



  getActs();
  getUsers();

})