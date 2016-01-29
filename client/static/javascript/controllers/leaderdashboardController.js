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
              ratings.push(users[z].acts[i].act_info.avg_rating)
            }
            for(j = 0; j < ratings.length; j++) {
              total += ratings[j]
            }

            users[z].rating = total/ratings.length;
          } else {
            users[z].rating = 0;
          }
       }
    
      _this.users = users;

    })

  }



  getActs();
  getUsers();

})