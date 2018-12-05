'use strict';
angular
	.module('regApp')
	.component('main', {
		controller: 'mainController',
		controllerAs: '$ctrl',
		templateUrl: './app/components/main/main.tpl.html'
	})
	.controller('mainController', function () {
        this.users = [];

        this.addUser = function (user) {
          console.log("main", user);
          this.users.push(user);
        }
  
        this.deleteUser = function (user) {
          const id = this.users.indexOf(user);
  
          if (id >= 0) {
            this.users.splice(id, 1);
          }
        };        
	});