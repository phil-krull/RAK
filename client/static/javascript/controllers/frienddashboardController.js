dak_app.controller('frienddashboardController', function($route, friendFactory, userFactory, $cookies) {
	
	this.userId = $cookies.get('userId')
	this.userName = $cookies.get('userName');

	this.users = [];

	this.user;

	var _this = this;
	function showUser() {

		userFactory.show(_this.userId, function(data) {
		// console.log(data);
		_this.user = data;
		})
	}

	function getUsers() {

		userFactory.index(function(data) {
		_this.users = data;
		})
	}

	function getfriends() {
		_this.mynotfriends = [];
		friendFactory.showFriends(_this.userId, function(friends) {
			userFactory.index(function(users) {
				console.log(users);
				if(friends.friends.length == 0) {
					_this.mynotfriends = users;
					return;
				}
				for(var i = 0; i < users.length; i++) {
					for(var j = 0; j < friends.friends.length; j++) {
						var count = 0;
						if(users[i]._id == friends.friends[j]._id || users[i]._id == _this.userId) {
							count = 1;
							break;
						}
					}
					if(count == 0) 
						{_this.mynotfriends.push({name: users[i].name, _id: users[i]._id})}
					count = 0;
				}
				// console.log(_this.mynotfriends);
			})
		})
	}
	
	showUser()
	getUsers()
	getfriends()






	this.addFriend = function(friend) {

		var newFriend = {};
		newFriend.userID = this.userId;
		newFriend.friendID = friend._id;

		friendFactory.create(this.userId, newFriend, function(){
			getfriends();
		})
		// $route.reload();

	} 

	this.removeFriend = function(friend) {
		console.log(friend)

		var removeFriend = {};
		removeFriend.userID = this.userId;
		removeFriend.friendID = friend._id;

		friendFactory.destroy(this.userId, removeFriend)

	}
})