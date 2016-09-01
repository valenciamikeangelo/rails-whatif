'use strict';

angular.module('whatifapp')
	.directive('tabmenu',function(){
		return {
			templateUrl:'home/_tabmenu.html',
			restrict: 'E',
			replace: true,
			scope: {
			},
			controller:function($scope, $state){
				$scope.$state = $state;
			}
		}
});
