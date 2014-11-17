'use strict';

angular.module('TwStream')
	.factory('Stream', function(){
		var service = {};

		service.connect = function(hashtag){
			var socket = io('http://localhost',{'hashtag':hashtag});
		};

		return service;
	});