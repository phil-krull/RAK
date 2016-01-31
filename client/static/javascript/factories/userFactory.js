dak_app.factory('userFactory', function($http) {
	factory = {};

	users = [];



	factory.index = function(callback) {
		$http.get('/users').success(function(output) {
			// console.log('Received from server getting users')
			// console.log(output);
			users = output;
			callback(users);
		})
	}


	factory.login = function(info, callback) {

		$http.post('/loginuser', info).success(function(output) {
			// console.log('Received from server login user');
			// console.log(output);
			callback(output);

		})
	}


	factory.create = function(info, callback) {
		$http.post('/users', info).success(function(output) {
			// console.log('Received from server create user');
			// console.log(output)
			callback(output)
		})
	}

	factory.show = function(info, callback) {
		console.log(info)
		$http.get('/users/'+info).success(function(output) {
			// console.log('Received from server show user');
			// console.log(output);
			callback(output);
		})
	}

	factory.addAct = function(info, callback) {
		$http.post('/users/addact', info).success(function(output) {
			console.log('Received from server add Act');
			console.log(output);

			callback()

		})
	}

	factory.completeAct = function(act,info, callback) {
		console.log(act)
		$http.patch('/acts/'+act, info).success(function(output) {
			console.log('Received from server complete Act');
			console.log(output);
			callback()
		})
	}

	return factory;
})