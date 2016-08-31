angular.module('whatifapp',['ui.router',
'templates',
'Devise',
'home',
'login',
'signup'])

  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

      $urlRouterProvider.otherwise('/home');

      $stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'home/_home.html',
		controller: 'HomeController',
		controllerAs: 'homeCtrl'
	})
  .state('login', {
		url: '/login',
		templateUrl: 'login/_login.html',
		controller: 'LoginController',
		controllerAs: 'loginCtrl'
	})
  .state('signup', {
    url: '/signup',
    templateUrl: 'signup/_signup.html',
    controller: 'SignupController',
    controllerAs: 'signupCtrl'
  })
  }]);
