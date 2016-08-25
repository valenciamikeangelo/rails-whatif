'use strict';

angular.module('whatifapp')
	.directive('header',function(){
		return {
			templateUrl:'home/_header.html',
			restrict: 'E',
			replace: true,
			scope: {
			},
			controller:function($scope, $state){
				$scope.$state = $state;
			}
		}
});
