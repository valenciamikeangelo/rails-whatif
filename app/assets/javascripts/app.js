angular.module('whatifapp',['ui.router',
'templates',
'Devise',
'home',
'login',
'signup'])

  .factory('ReqInterceptor',[function(){
    return{
      request:function(config){
        csrfToken = $('meta[name=csrf-token]').attr('content')
        config.headers['X-CSRF-Token'] = csrfToken
        return config;
      }
    }
  }])
  .config(['$stateProvider','$urlRouterProvider','$httpProvider',function($stateProvider,$urlRouterProvider,$httpProvider){
      $httpProvider.interceptors.push('ReqInterceptor');

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
