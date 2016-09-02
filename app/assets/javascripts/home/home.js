(function(){

  angular.module('home',['ui.router','feeds','appconfig'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $stateProvider
    .state('home.feeds', {
  		url: '/feeds',
  		templateUrl: 'home/feeds/_feeds.html',
  		controller: 'FeedsController',
  		controllerAs: 'feedsCtrl'
  	})
  }])
  .service('PostService',['configuration','$http',function(configuration,$http){

      function doCreate(post){
          $http.post(configuration.backend + '/posts.json',	post);
      }

      return{
        create:function(post){
           return doCreate(post);
        }
      }


  }])
  .controller('HomeController',['PostService', function(PostService){
      var self=this;

      self.submitPost=function(){
        var post = {
          post:{
					 title : self.title,
					 link : self.content
          }
			  }
        console.log('Content ='+post);
        PostService.create(post);
      }

  }])

})();
