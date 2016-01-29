dak_app.controller('userdashboardController', function(userFactory, $routeParams, $cookies, actFactory) {

	this.userId = $cookies.get('userId');
	this.userName = $cookies.get('userName')

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

		_this.generateDAKValidation = false;
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





})