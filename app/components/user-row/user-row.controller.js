angular
	.module('regApp')
	.component('userRow', {
		bindings: {
			currentUser: '<',
			onDelete: '&'
		},
		controller: 'userRowController',
		controllerAs: '$ctrl',
		templateUrl: './app/components/user-row/user-row.tpl.html'
	})
	.controller('userRowController', function () {	
		this.delete = function () {
			this.onDelete({ user: this.currentUser });
		};
	});
