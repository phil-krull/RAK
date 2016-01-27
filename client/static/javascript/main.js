var dak_app = angular.module('dak_app', ['ngRoute', 'ngCookies']);

dak_app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './partials/homepage.html',
      controller: 'homepageController',
      controllerAs: 'homepageCtrl'
    })
    .when('/login', {
      templateUrl: './partials/login.html',
      controller: 'loginController',
      controllerAs: 'loginCtrl'
    })
    .when('/logout', {
      templateUrl: './partials/logout.html',
      controller: 'logoutController',
      controllerAs: 'logoutCtrl'
    })
    .when('/register', {
      templateUrl: './partials/register.html',
      controller: 'registerController',
      controllerAs: 'registerCtrl'
    })
    .when('/userdashboard', {
      templateUrl: './partials/userDashboard.html',
      controller: 'userdashboardController',
      controllerAs: 'userdashboardCtrl'
    })
    .when('/frienddashboard', {
      templateUrl: './partials/friendDashboard.html',
      controller: 'frienddashboardController',
      controllerAs: 'frienddashboardCtrl'
    })
    .when('/leaderdashboard', {
      templateUrl: './partials/leaderDashboard.html',
      controller: 'leaderdashboardController',
      controllerAs: 'leaderdashboardCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
  })