'use strict';

angular.module('TwStream')
	.controller('MainCtrl', function($scope, Stream){
		$scope.stream  = Stream;

	});