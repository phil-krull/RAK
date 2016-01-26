dak_app.controller('friendController', function(friendFactory, userFactory, $cookies) {

	users = [];

	userID = $cookies.get('userId');
	username = $cookies.get('userName');

	var _this = this;
	userFactory.index(function(data) {
		users = data;
	})

	this.addFriend = function(friend) {
		console.log(friend);

		newFriend.friendID = friend._id;
		newFriend.userID = userID;

		friendFactory.create(newFriend);


	}

	this.removeFriend = function(friend) {
		console.log(friend);

		removeFriend.friendID = friend._id;

		friendFactory.destroy(userID, removeFriend.friendID)
	}

})