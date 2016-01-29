dak_app.controller('showUserController', function($location, $cookies, $routeParams, userFactory, friendFactory) {
	
	this.userId = $cookies.get('userId');
	this.userName = $cookies.get('userName')

	this.showuserId = $routeParams.userId
	console.log('The user Id of this user to show is')
	console.log(this.showuserId);

	this.user = {};

	var _this = this;

	userFactory.show(this.showuserId, function(data) {
		console.log(data)
		_this.user = data;
		console.log('getting user rating')
		getUserRating()
		console.log(_this.currentUserRating)
	})

	this.currentUserRating;

	function getUserRating() {
		
		if(_this.user.acts != 0) {
			console.log(_this.user.acts[0].act_info.avg_rating)
			var ratings = [];
			var total = 0;

			for(i = 0; i < _this.user.acts.length; i++) {
				ratings.push(_this.user.acts[i].act_info.avg_rating)
			}
			for(j = 0; j < ratings.length; j++) {
				total += ratings[j]
			}
			_this.currentUserRating = total/ratings.length;
		} else {
			_this.currentUserRating = 0
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