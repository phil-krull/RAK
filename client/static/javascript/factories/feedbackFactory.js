dak_app.factory('feedbackFactory', function($http){

	factory = {};

	feedback = [];

	factory.create = function(info, callback) {
		$http.post('/feedback', info).success(function(output) {
			console.log(output);
		})
	}

	return factory;


})