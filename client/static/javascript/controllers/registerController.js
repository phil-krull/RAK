dak_app.controller('registerController', function(userFactory, $location, $cookies) {

	this.errors = [];

	this.register = function() {
		

		var _this = this;
		userFactory.create(this.registerForm, function(output) {
			console.log(output);

// Jesse, I changed the bottom just to see if it would would into the if statement
// it worked like a charm
			if(output.errors) {	
				if(output.errors.alias) {
					_this.errors.push(output.errors.alias.message);
				}
				if(output.errors.email) {
					_this.errors.push(output.errors.email.message);
				}

			} else {
				this.errors = [];
				$cookies.put('userId', output._id );
				$cookies.put('userName', output.name);
				$location.path('/userdashboard');
			}

		});

		this.registerForm = {};
	}
})