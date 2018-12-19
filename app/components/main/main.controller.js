'use strict';
angular
	.module('regApp')
	.component('main', {
		controller: 'mainController',
		controllerAs: '$ctrl',
		templateUrl: './app/components/main/main.tpl.html'
	})
	.controller('mainController', function (userService) {
        this.users = [];

        this.users.push({name:"1", sex: "male", id: "qwe123"});
        userService.addUser({name:"1", sex: "male", id: "qwe123123"})
        this.users.push({name:"1", sex: "female", id: "qwe123", gitHubAccount: "yasav", icon: "https://avatars1.githubusercontent.com/u/12753696?v=4"});
        userService.addUser({name:"1", sex: "female", id: "qwe123", gitHubAccount: "yasav", icon: "https://avatars1.githubusercontent.com/u/12753696?v=4"})


        this.addUser = function (user) {
          console.log("main", user);
          this.users.push(user);
          userService.addUser(user);
        }
        
	});