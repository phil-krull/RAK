dak_app.controller('leaderdashboardController', function(actFactory, userFactory) {
	var _this = this;

  function getActs() {
    actFactory.index(function(acts) {
      _this.acts = acts;
      console.log(acts);
    })
  }

  function getUsers() {
    userFactory.index(function(users) {
      _this.users = users;
    })

  }

  getActs();
  getUsers();

})