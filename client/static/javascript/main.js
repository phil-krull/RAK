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
      controller: 'logoutController',
      controllerAs: 'logoutCtrl'
    })
    .when('/register', {
      templateUrl: './partials/register.html',
      controller: 'registerController',
      controllerAs: 'registerCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
  })