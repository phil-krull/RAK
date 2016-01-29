dak_app.controller('showActController', function($routeParams, actFactory) {

	this.showactId = $routeParams.actId	
	console.log('The act Id of this act to show is');
	console.log(this.showactId);

	this.act = {};

	var _this = this;
	actFactory.show(this.showactId, function(data) {
		console.log(data)
		_this.act = data;
		
	})



})