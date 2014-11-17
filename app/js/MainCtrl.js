'use strict';

angular.module('TwStream')
	.controller('MainCtrl', function($scope, Stream){
		$scope.stream  = Stream;
		$scope.tweets = [];

		$scope.connect = function(){
			Stream.connect($scope.hashtag)
			.then(function(socket){
				socket.on('new tweet', function(tweet){
					$scope.tweets.push(tweet);
					$scope.$apply();

				});
			})
		};


	});