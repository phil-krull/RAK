dak_app.controller('homepageController', function($cookies, $location, userFactory, friendFactory, actFactory) {

	this.users = [];

	this.acts = [];

	this.loggedin;

	_this.loggedin
	actFactory.loggedin(function(data) {
		_this.loggedin = data;
	})


	actFactory.index(function(data) {
		console.log(data);
		_this.acts = data;
	})

	  this.createDAK = function() {
	    actFactory.create(this.newDAK);
	    this.newDAK = {};
	  }



})