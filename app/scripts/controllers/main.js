'use strict';

/**
 * @ngdoc function
 * @name lechugasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lechugasApp
 */
angular.module('lechugasApp')
 	.constant("baseUrl", "https://api.ripple.com/v1/accounts/rHs7CKLJMwt4VPKQ6rZyqGf9JgJF5xxXxx/payments/paths/respAugvGbZscrwsXm32iC3KkjykhoBkx/10+MXA+rhsvfAFxDYnXBZ7eNLtXvC73wBdRgnv6wR")
	 .controller('MainCtrl', function ($scope, $http, baseUrl) {
    
	
	$scope.forex = function(){
		$http.get(baseUrl).success(function (data) {

			$scope.rate = data;
		});
	}	

	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
