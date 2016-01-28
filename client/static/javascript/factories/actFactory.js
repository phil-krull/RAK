dak_app.factory('actFactory', function($http) {
	var factory = {};

	acts = [];

	// var loggedin = false;

	loggedin = false;

	factory.loggedin = function() {
		
		return loggedin;
	}


	factory.login = function() {
		// factory.loggedin = true;
		
		loggedin = true;
		// angular.copy(true, factory.loggedin);
	}

	factory.logout = function() {
		loggedin = false;
	}

	factory.index = function(callback) {
		$http.get('/acts').success(function(output) {
			console.log('Received from server getting acts')
			console.log(output)
			acts = output;
			callback(acts);
		})
	}


	factory.create = function(info)  {

		$http.post('/acts', info).success(function(output) {
			console.log('Received from server create act');
			console.log(info);
			console.log(output);
		})

	}

	factory.update = function(info) {
		$http.patch('/acts/'+info).success(function(output) {
			console.log('Received from server update act');
			console.log(output);
		})
	}


	return factory;
})