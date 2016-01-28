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

			


})