dak_app.controller('registerController', function(userFactory, $location, $cookies) {

	this.error;

	this.register = function() {
		console.log(this.registerForm.username);
		console.log(this.registerForm.password);

		var _this = this;
		userFactory.create(this.registerForm, function(output) {
			console.log(output);

			if(output[0] === "Error") {	
				_this.error = output;
				$location.path('/register');
			} else {
				$cookies.put('userId', output._id );
				$cookies.put('userName', output.name);
				$location.path('/login');
			}

		});

		this.registerForm = {};
	}
})