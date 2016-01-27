dak_app.controller('userdashboardController', function(userFactory, $cookies) {

	this.userId = $cookies.get('userId');
	this.userName = $cookies.get('userName')

	this.user = {};

	var _this = this;
	userFactory.show(this.userId, function(data) {
		_this.user = data;
	})

	


})