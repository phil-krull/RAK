dak_app.factory('actFactory', function($http) {
	factory = {};

	acts = [];


	factory.index = function() {
		$http.get('/acts').success(function(output) {
			console.log('Received from server getting acts')
			console.log(output)
			acts = output;
		})
	}


	factory.create = function(info)  {

		$http.post('/acts', info).success(function(output) {
			console.log('Received from server create act');
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