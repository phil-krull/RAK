dak_app.factory('actFactory', function($http) {
	factory = {};

	acts = [];

	var loggedin = false;

	factory.loggedin = function(callback) {
		callback(loggedin)
	}

	factory.login = function() {
		loggedin = true;
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