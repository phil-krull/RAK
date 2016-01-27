dak_app.controller('logoutController', function($cookies, actFactory, $location) {

	$cookies.remove('userId');
	$cookies.remove('userName');
	actFactory.logout();
	$location.path('/')
})