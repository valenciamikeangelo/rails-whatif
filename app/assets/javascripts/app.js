angular.module('whatifapp',['ui.router','templates','home'])

  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

      $urlRouterProvider.otherwise('/home');

      $stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'home/_home.html',
		controller: 'HomeController',
		controllerAs: 'homeCtrl'
	})

  }]);
