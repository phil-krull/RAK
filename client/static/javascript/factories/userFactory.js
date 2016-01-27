dak_app.factory('userFactory', function($http) {
	factory = {};

	users = [];

	factory.index = function(callback) {
		$http.get('/users').success(function(output) {
			console.log('Received from server getting users')
			console.log(output);
			users = output;
			callback(users);
		})
	}


	factory.login = function(info, callback) {

		$http.post('/loginuser', info).success(function(output) {
			console.log('Received from server login user');
			console.log(output);
			callback(output);

		})
	}


	factory.create = function(info, callback) {
		$http.post('/users', info).success(function(output) {
			console.log('Received from server create user');
			console.log(output)
			callback(output)
		})
	}


	return factory;
})