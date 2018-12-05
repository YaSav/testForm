angular
	.module('regApp')
	.component('userDetails', {
		bindings: {
			currentUser: '<',
			onDelete: '&'
		},
		controller: 'userDetailsController',
		controllerAs: '$ctrl',
		templateUrl: './app/components/user-details/user-details.tpl.html'
	})
	.controller('userDetailsController', function () {	
		this.delete = function () {
			this.onDelete({ user: this.currentUser });
		};
	});
