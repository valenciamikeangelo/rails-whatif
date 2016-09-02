(function(){
    angular.module('feeds',['appconfig'])
    .service('FeedService',['configuration','$http',function(configuration,$http){

       function doGetAll(){
         var response=$http.get(configuration.backend + '/posts.json');
         return response;
       }

      return{
        getAll:function(){
          return doGetAll();
        }
      }
    }])
    .controller('FeedsController',['FeedService',function(FeedService){
      var self=this;
      var posts;

      FeedService.getAll().then(handleSuccess,handleError);

      function handleSuccess(response){
        var data=response.data;
        console.log('Posts:' +data)
        self.posts=data;
      }
      function handleError(response){

      }


    }]);
})();
