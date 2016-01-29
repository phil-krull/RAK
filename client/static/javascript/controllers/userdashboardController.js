dak_app.controller('userdashboardController', function(userFactory, friendFactory, $cookies, actFactory) {

	this.userId = $cookies.get('userId');
	this.userName = $cookies.get('userName')

	this.user = {};
	this.acts = [];

	var _this = this;

	// function showFriends() {
	// 	userFactory.show(this.userId, function(data) {
	// 		console.log(this.userId)
	// 		_this.user = data;
	// 	})
	// }
	// showFriends();	

	
		userFactory.show(this.userId, function(data) {
			console.log(this.userId)
			console.log(this.userName)
			_this.user = data;
			console.log('getting user rating')
			getUserRating()
			console.log(_this.currentUserRating)
		})
	

	actFactory.index(function(data) {
		console.log(data);
		_this.acts = data;

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
			_this.currentUserRating = "You don't have a rating! Click on 'Generate DAK' to start your first!"
		}
	}


	this.generatedDAK;

	this.generateDAK = function() {

		this.generatedDAK = acts[Math.floor(acts.length * Math.random())]
		console.log(this.generatedDAK);

		var addedAct = {};
		addedAct.userID = this.userId;
		addedAct.actID = this.generatedDAK._id

		var _this = this;
		userFactory.addAct(addedAct, function() {

			userFactory.show(_this.userId, function(data) {
				console.log(data);
				_this.user = data;
			})
		})
	}



	this.sendCompleteAct = function(act, index) {
		console.log('sendcompleteact is running')
		console.log(this.completeActForm[index])
		console.log(act)
		console.log(index)

		var sendCompleteForm = {};
		sendCompleteForm.recommend = parseInt(this.completeActForm[index].recommend);
		sendCompleteForm.actrating = parseInt(this.completeActForm[index].actrating);
		sendCompleteForm.comment = this.completeActForm[index].comment;
		sendCompleteForm.actID = act;
		sendCompleteForm.userID = this.userId;

		userFactory.completeAct(act, sendCompleteForm, function() {

			var _this = this;
			userFactory.index(function(data) {
				_this.user = data;
			})
		})
		this.completeActForm[index] = {};
	}

		this.removeFriend = function(friend) {
			console.log(this.userId)
			console.log(friend)
			var removeFriend = {};
			removeFriend.userID = this.userId;
			removeFriend.friendID = friend;
			friendFactory.destroy(this.userId, removeFriend)
			// showFriends();
	}



})