dak_app.controller('registerController', function(userFactory, $location, $cookies) {

	this.error;

	this.register = function() {
		

		var _this = this;
		userFactory.create(this.registerForm, function(output) {
			console.log(output);

// Jesse, I changed the bottom just to see if it would would into the if statement
// it worked like a charm
			if(output.errors) {	
				// console.log('in failed register statement');
				_this.error = output.errmsg;
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