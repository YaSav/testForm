'use strict';
angular
	.module('regApp')
	.component('userList', {
    bindings: {
			users: '<',//'='
		},
		controller: 'userListController',
		controllerAs: '$ctrl',
		templateUrl: './app/components/user-list/user-list.tpl.html'
	})
	.controller('userListController', function () {
 
        this.deleteUser = function (user) {
          const id = this.users.indexOf(user);
  
          if (id >= 0) {
            this.users.splice(id, 1);
          }
        };        
	});