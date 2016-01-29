dak_app.controller('registerController', function(userFactory, $location, $cookies) {

	this.errors = [];

	this.register = function() {
		

		var _this = this;
		userFactory.create(this.registerForm, function(output) {
			console.log(output);


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
				
				$location.path('/userdashboard/'+"generateDAK");

			}

		});

		this.registerForm = {};
	}
})