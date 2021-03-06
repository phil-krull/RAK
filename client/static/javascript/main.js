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
    .when("/contact_us", {
      templateUrl: "./partials/contact_us.html",
      controller: 'homepageController',
      controllerAs: 'homepageCtrl'
    })
    .when('/orig_homepage', {
      templateUrl: './partials/orig_homepage.html',
      controller: 'homepageController',
      controllerAs: 'homepageCtrl'
    })
    .when('/test', {
      templateUrl: './partials/test.html',
      controller: 'homepageController',
      controllerAs: 'homepageCtrl'
    })
    .when('/user/:userId', {
      templateUrl: './partials/user.html',
      controller: 'showUserController',
      controllerAs: 'showuserCtrl'
    })
    .when('/act/:actId', {
      templateUrl: './partials/act.html',
      controller: 'showActController',
      controllerAs: 'showactCtrl'
    })
    .when('/userdashboard/:generateDAK', {
      templateUrl: './partials/userDashboard.html',
      controller: 'userdashboardController',
      controllerAs: 'userdashboardCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
  })