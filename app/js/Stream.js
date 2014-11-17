'use strict';

angular.module('TwStream')
	.factory('Stream', function(){
		var service = {};

		service.connect = function(hashtag){
			var socket = io('http://localhost');
			socket.emit('set hashtag', hashtag);
			socket.on('new tweet', function(tweet){
				console.log(tweet);
			});
		};

		return service;
	});