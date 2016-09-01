(function(){

  angular.module('home',['ui.router','feeds'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $stateProvider
    .state('home.feeds', {
  		url: '/feeds',
  		templateUrl: 'home/feeds/_feeds.html',
  		controller: 'FeedsController',
  		controllerAs: 'feedsCtrl'
  	})
  }])
  .controller('HomeController',['PostService', function(PostService){
      var self=this;

      self.submitPost=function(){

      }

  }])
  .service('PostService',[function(){

  }]);

})();
