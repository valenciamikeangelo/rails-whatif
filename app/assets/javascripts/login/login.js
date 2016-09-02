(function(){

  angular.module('login',['Devise'])

  .controller('LoginController',['Auth','$state','$scope',function(Auth,$state,$scope){
      var self =this;

      self.login = function() {

          var credentials={
                email:self.email,
                password:self.password
              };
              //csrfToken = $('meta[name=csrf-token]').attr('content')
              var config = {
                headers: {
                  'X-HTTP-Method-Override': 'POST'
                //  'X-CSRF-Token':csrfToken
                }
            };

            Auth.login(credentials, config).then(function(user) {
              console.log(user); // => {id: 1, ect: '...'}
            }, function(error) {
                // Authentication failed...
              });

              $scope.$on('devise:login', function(event, currentUser) {
                // after a login, a hard refresh, a new tab
              });

              $scope.$on('devise:new-session', function(event, currentUser) {
                // user logged in by Auth.login({...})
              });

			     $state.go('home');

		}


  }])
})();
