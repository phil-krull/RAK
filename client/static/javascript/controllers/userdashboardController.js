dak_app.controller('userdashboardController', function(userFactory, friendFactory, $routeParams, $cookies, actFactory) {

	this.userId = $cookies.get('userId');
	this.userName = $cookies.get('userName')
	console.log(this.userId);
	console.log(this.userName);

	this.user = {};
	this.acts = [];

	// console.log($cookies.get('generateDAKonReg'))

	// if($cookies.get('generateDAKonReg')) {

	// 	this.generateDAK();
	// 	$cookies.remove('generateDAKonReg');
	// }	
	this.generateDAKValidation = $routeParams.generateDAK
		console.log(this.generateDAKValidation)

	this.generatedDAK;

	function generateDAKonReg() {

		_this.generateDAKValidation;
		this.generatedDAK = acts[Math.floor(acts.length * Math.random())]
		console.log(this.generatedDAK);

		var addedAct = {};
		addedAct.userID = $cookies.get('userId')
		addedAct.actID = this.generatedDAK._id

		var _this = this;
		userFactory.addAct(addedAct, function() {

			userFactory.show($cookies.get('userId'), function(data) {
				console.log(data);
				_this.user = data;
			})
		})
	}




	var _this = this;


	userFactory.show(this.userId, function(data) {
		console.log(data)
		_this.user = data;
		console.log('getting user rating')
		getUserRating()
		console.log(_this.currentUserRating)
		getFriends()
		console.log(_this.user.friends)


	// function showFriends() {
	// 	userFactory.show(this.userId, function(data) {
	// 		console.log(this.userId)
	// 		_this.user = data;
	// 	})
	// }
	// showFriends();	

	
		// userFactory.show(this.userId, function(data) {
		// 	console.log(this.userId)
		// 	console.log(this.userName)
		// 	_this.user = data;
		// 	console.log('getting user rating')
		// 	getUserRating()
		// 	console.log(_this.currentUserRating)
		})
	

	actFactory.index(function(data) {
		console.log(data);
		_this.acts = data;

		if( _this.generateDAKValidation == 'generateDAK') {
			generateDAKonReg();
		
	}

	}) 


	this.currentUserRating;

	function getUserRating() {
		
		if(_this.user.acts != 0) {
			
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

				console.log(ratings)
				for(j = 0; j < ratings.length; j++) {
							total += ratings[j]
				}

				var num = total/ratings.length;

				_this.currentUserRating = num.toFixed(1);
			} else if(ratings == 0) {
				
				_this.currentUserRating = "You haven't completed an act or acts have not been rated yet! Finish an act to rate and you'll get rated!"
			}

		} else {
			_this.currentUserRating = "You don't have a rating! Click on 'Get Daily Act' to start your first!"
		}
	}


	

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


		var _this = this;

		userFactory.completeAct(act, sendCompleteForm, function() {

			
			userFactory.show(_this.userId, function(data) {
				console.log(data)
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
			console.log('this is it')
			console.log(removeFriend.friendID)
			friendFactory.destroy(this.userId, removeFriend)
			// showFriends();
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

})

