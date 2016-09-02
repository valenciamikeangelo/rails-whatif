(function(){
  angular.module('signup',['Devise'])
  .config(function(AuthProvider) {
       // Configure Auth service with AuthProvider
  })
 .controller('SignupController',['$state','$scope','Auth',function($state,$scope,Auth){
     var self=this;

     self.signup=function(){
       var credentials = {
              email: self.email,
              username: self.username,
              password: self.password,
              password_confirmation: self.confpass
          };
            console.log('User :' + credentials);
             //csrfToken = $('meta[name=csrf-token]').attr('content')
          var config = {
              headers: {
                  'X-HTTP-Method-Override': 'POST'
              //    'X-CSRF-Token':csrfToken
              }
          };

          Auth.register(credentials, config).then(function(registeredUser) {
              console.log(registeredUser); // => {id: 1, ect: '...'}
          }, function(error) {
              // Registration failed...
          });

          $scope.$on('devise:new-registration', function(event, user) {
              $state.go('home');
          });
     }



 }])
})();
