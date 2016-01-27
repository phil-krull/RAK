dak_app.controller('loginController', function(userFactory, $cookies, $location) {

	this.error;

	this.login = function() {
		console.log(this.loginForm.email);
		console.log(this.loginForm.password);


		var _this = this;
		userFactory.login(this.loginForm, function(output) {
			console.log(output);

			if(output[0] === "Error") {
				_this.error = output;
				$location.path('/login');
			} else {
				$cookies.put('userId', output._id);
				$cookies.put('userName', output.name);
				$location.path('/');
			}
		})

		this.loginForm = {};
	}

})