dak_app.controller('showUserController', function($location, $cookies, $routeParams, userFactory, friendFactory) {
	
	this.userId = $cookies.get('userId');
	this.userName = $cookies.get('userName')

	this.showuserId = $routeParams.userId
	console.log('The user Id of this user to show is')
	console.log(this.showuserId);

	this.user = {};

	this.currentUserRating;
	

	var _this = this;

	userFactory.show(this.showuserId, function(data) {
		console.log(data)
		_this.user = data;
		console.log('getting user rating')
		getUserRating()
		console.log(_this.currentUserRating)

		getFriends()


	})

	

	function getUserRating() {
		
		if(_this.user.acts != 0) {
			console.log(_this.user.acts[0].act_info.avg_rating)
			var ratings = [];
			var total = 0;

			for(i = 0; i < _this.user.acts.length; i++) {

				if(_this.user.acts[i].completed === true) {

					if(_this.user.acts[i].act_info.avg_rating != 0) {


						ratings.push(_this.user.acts[i].act_info.avg_rating)

					}
				}

				
			}

			if(ratings != 0) {
				for(j = 0; j < ratings.length; j++) {
					total += ratings[j]
				}
				_this.currentUserRating = total/ratings.length;
			}else if(ratings == 0) {
				_this.currentUserRating = "No Rating"
			}
		} else {
			_this.currentUserRating = "No Rating"
		}
	}


	function getFriends() {

		for(z = 0; z < _this.user.friends.length; z++) {

			if(_this.user.friends[z].acts != 0) {
				var ratings = [];
				var total = 0;


				for(i = 0; i < _this.user.friends[z].acts.length; i++) {

					if(_this.user.friends[z].acts[i].completed === true) {

						if(_this.user.friends[z].acts[i].act_info.avg_rating != 0) {

							ratings.push(_this.user.friends[z].acts[i].act_info.avg_rating)

						}
					}
				}

				if(ratings != 0) {

					for(j = 0; j < ratings.length; j++) {
					total += ratings[j]
					
					}

					var num = total/ratings.length;

					_this.user.friends[z].rating = num.toFixed(1);

				} else if(ratings == 0) {
					_this.user.friends[z].rating = "No Rating"
				}

					
				
				
			} else {
				_this.user.friends[z].rating = "No Rating";
			}
		}


	}

	this.addFriend = function(friend) {
		var newFriend = {};
		newFriend.userID = this.userId;
		newFriend.friendID = friend;


		friendFactory.create(this.userId, newFriend, function() {
			$location.path('/userdashboard')
		})
	}

})