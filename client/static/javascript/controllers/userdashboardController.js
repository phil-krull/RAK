dak_app.controller('userdashboardController', function(userFactory, $cookies, actFactory) {

	this.userId = $cookies.get('userId');
	this.userName = $cookies.get('userName')

	this.user = {};
	this.acts = [];

	var _this = this;
	userFactory.show(this.userId, function(data) {
		_this.user = data;
	})

	actFactory.index(function(data) {
		console.log(data);
		_this.acts = data;

	}) 

	this.generatedDAK;

	this.generateDAK = function() {

		this.generatedDAK = acts[Math.floor(acts.length * Math.random())]
		console.log(this.generatedDAK);

		var addedAct = {};
		addedAct.userID = this.userId;
		addedAct.actID = this.generatedDAK._id

		userFactory.addAct(addedAct)


	}

	


	this.sendCompleteAct = function(act, index) {
		console.log('sendcompleteact is running')
		console.log(this.completeActForm[index])
		console.log(act)
		console.log(index)

		var sendCompleteForm = {};
		sendCompleteForm.recommend = this.completeActForm[index].recommend;
		sendCompleteForm.actrating = this.completeActForm[index].actrating;
		sendCompleteForm.comment = this.completeActForm[index].comment;
		sendCompleteForm.actID = act._id;
		sendCompleteForm.userID = this.userId;

		userFactory.completeAct(sendCompleteForm, function() {

			var _this = this;
			userFactory.index(function(data) {
				_this.user = data;
			})
		})


		this.completeActForm[index] = {};

	}


})