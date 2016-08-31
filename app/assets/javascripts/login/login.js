(function(){

  angular.module('login',['Devise'])

  .controller('LoginController',['Auth','$state',function(Auth,$state){
      var self =this;

      self.login = function() {
			     $state.go('home');
			//LoginService.authenticate(userMapping()).then(handleLoginSuccess, handleError);
		}


  }])
})();
