angular
	.module('regApp')
	.component('userList', {
		controller: 'userListController',
		controllerAs: '$ctrl',
		templateUrl: './app/components/user-list/user-list.tpl.html'
	})
	.controller('userListController', function () {
        this.users = [];

        this.addUser = function (user) {
          this.users.push(user);
        }
  
        this.deleteUser = function (user) {
          const id = this.users.indexOf(user);
  
          if (id >= 0) {
            this.users.splice(id, 1);
          }
        };        
	});