dak_app.controller('frienddashboardController', function($route, friendFactory, userFactory, $cookies) {
	
	this.userId = $cookies.get('userId')
	this.userName = $cookies.get('userName');

	this.users = [];

	this.user;

	var _this = this;
	userFactory.index(function(data) {
		console.log(data);
		_this.users = data;
	})

	userFactory.show(this.userId, function(data) {
		console.log(data);
		_this.user = data;
	})

	this.addFriend = function(friend) {

		var newFriend = {};
		newFriend.userID = this.userId;
		newFriend.friendID = friend._id;

		friendFactory.create(this.userId, newFriend)
		$route.reload();

	} 

	this.removeFriend = function(friend) {

		var removeFriend = {};
		removeFriend.userID = this.userId;
		removeFriend.friendID = friend._id;

		friendFactory.destroy(this.userId, removeFriend)
		$route.reload();
	}


})