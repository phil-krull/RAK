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


	factory.create = function(info) {
		$http.post('friends/'+info).success(function(output) {
			console.log('Received from server create friend');
			console.log(output);
		})

	}
})