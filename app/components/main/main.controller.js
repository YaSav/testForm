'use strict';
angular
	.module('regApp')
	.component('main', {
		controller: 'mainController',
		controllerAs: '$ctrl',
		templateUrl: './app/components/main/main.tpl.html'
	})
	.controller('mainController', function (userService) {
        this.users = userService.getUsers();

        this.addUser = function (user) {
          userService.addUser(user);
        }
        
	});