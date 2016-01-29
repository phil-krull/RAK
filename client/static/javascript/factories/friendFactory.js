dak_app.factory('friendFactory', function($http) {
	factory = {};

	friends = [];

	factory.index = function() {
		$http.get('/friends/'+info).success(function(output) {
			console.log('Received from server getting friends');
			console.log(output);
			friends = output;
		})
	}


	factory.create = function(user, info, callback) {
		// attach friendID and userID
		$http.post('friends/'+user, info).success(function(output) {
			console.log('Received from server create friend');
			console.log(info);
			callback();
		})

	}

	factory.destroy = function(user, info) {
		$http.delete('friends/'+user, info).success(function(output) {
			console.log('Received from server delete friend');
			console.log(output);
			
		})
	}

	factory.showFriends = function(user, info) {
		$http.get('friends/' + user).success(function(output) {
			info(output);
		})
	}

	factory.showOne = function(user, info) {
		$http.get('users/' + user).success(function(output) {
			info(output);
		})
	}

	return factory;
})