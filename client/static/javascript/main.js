var dak_app = angular.module('dak_app', ['ngRoute', 'ngCookies']);

dak_app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './partials/homepage.html',
      controller: './javascript/controllers/homepageController.js',
      controllerAs: 'homepageCtrl'
    })
    .when('/login', {
      templateUrl: './partials/login.html',
      controller: './javascript/controllers/loginController.js',
      controllerAs: 'loginCtrl'
    })
    .when('/logout', {
      controller: './javascript/controllers/logoutController.js'
      controllerAs: 'logoutCtrl'
    })
    .when('/register', {
      templateUrl: './partials/register.html',
      controller: './javascript/controllers/registerController.js',
      controllerAs: 'registerCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
  })