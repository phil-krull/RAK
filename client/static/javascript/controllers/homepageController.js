dak_app.controller('homepageController', function($cookies, $location, userFactory, friendFactory, actFactory) {

	users = [];

	var _this = this;
	userFactory.index(function(data) {
		console.log(data);
		_this.users = data;
	})

  this.createDAK = function() {
    actFactory.create(this.newDAK);
    this.newDAK = {};
  }

})