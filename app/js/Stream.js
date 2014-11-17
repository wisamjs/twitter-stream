'use strict';

angular.module('TwStream')
	.factory('Stream', function($q){
		var service = {};

		service.connect = function(hashtag){
			var defer = $q.defer();

			var socket = io('http://localhost');
			socket.emit('set hashtag', hashtag);
			defer.resolve(socket);

			return defer.promise;
		};

		return service;
	});