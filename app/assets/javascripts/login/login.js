(function(){

  angular.module('login',['Devise'])

  .controller('LoginController',['Auth','$state',function(Auth,$state){
      var self =this;

      self.login = function() {

          var credentials={
                email:self.email,
                password:self.password
              };

              var config = {
                headers: {

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
