dak_app.controller('loginController', function(userFactory, $cookies, $location, actFactory) {

	this.error;

	this.login = function() {
		console.log(this.loginForm.email);
		console.log(this.loginForm.password);


		var _this = this;
		userFactory.login(this.loginForm, function(output) {
			console.log(output);

			if(output.errmsg) {
				_this.error = output.errmsg;
				
			} else {
				$cookies.put('userId', output._id);
				$cookies.put('userName', output.name);
				actFactory.login();
				$location.path('/userdashboard');
			}
		})

		this.loginForm = {};
	}

})