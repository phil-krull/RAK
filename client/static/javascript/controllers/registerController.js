dak_app.controller('registerController', function(userFactory, $location, $cookies) {

	this.error;

	this.register = function() {
		

		var _this = this;
		userFactory.create(this.registerForm, function(output) {
			console.log(output);

			if(output.errmsg) {	
				_this.error = output.errmsg;
				
			} else {
				$cookies.put('userId', output._id );
				$cookies.put('userName', output.name);
				actFactory.login();
				$location.path('/homepage');

			}

		});

		this.registerForm = {};
	}
})