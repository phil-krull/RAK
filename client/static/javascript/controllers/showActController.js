dak_app.controller('showActController', function($routeParams, actFactory) {

	this.showactId = $routeParams.actId	
	console.log('The act Id of this act to show is');
	console.log(this.showactId);

	this.act = {};
	this.data = {};

	var _this = this;
	actFactory.show(this.showactId, function(data) {
		console.log(data)
		_this.data = data;
		_this.data.currApprovalRating = getApprovalRating();
		// _this.data.currAverageUserRating = getAverageUserRating();
		_this.act = _this.data;
		getUsers()

	})

	function getApprovalRating() {
		var count = 0;
		for (i = 0; i < _this.data.approval_rating.length; i++) {
			if(_this.data.approval_rating[i] == 1) {
				count ++;
			}
			
		}
		console.log(count);

		num = (count/_this.data.approval_rating.length) * 100

		return num.toFixed(1);

	}


	function getUsers() {
      
	console.log(_this.act.users[0].acts[0].act_info.avg_rating)

	if(_this.act.users != 0) {


       for(z = 0; z < _this.act.users.length; z++) {

          if(_this.act.users[z].acts != 0) {
            var ratings = [];
            var total = 0;

            for(i = 0; i < _this.act.users[z].acts.length; i++) {

              if(_this.act.users[z].acts[i].completed === true) {

                if(_this.act.users[z].acts[i].act_info.avg_rating != 0) {

                  ratings.push(_this.act.users[z].acts[i].act_info.avg_rating)
                  
                }

              }

            }

            if(ratings != 0) {

              for(j = 0; j < ratings.length; j++) {
                total += ratings[j]
              }

              var num = total/ratings.length

              _this.act.users[z].rating = num.toFixed(1);
              
            } else if(ratings == 0) {
              _this.act.users[z].rating = "No Rating"
            }
          } else {
            _this.act.users[z].rating = "No Rating";
          }
       }
    
    
   }
 

  }

	// function getAverageUserRating() {
	// 	var total = 0;
	// 	for (i = 0; i < _this.data.user_ratings.length; i++) {
			
	// 			total += _this.data.user_ratings[i]
			
			
	// 	}
	// 	console.log(total)

	// 	num = total/_this.data.user_ratings.length

	// 	return num.toFixed(1);

	// }



})