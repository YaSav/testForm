angular
	.module('regApp')
	.component('userDetail', {
		bindings: {
			user: '<'
		},		
		controller: 'userDetailController',
		controllerAs: '$ctrl',
		templateUrl: './app/components/user-detail/user-detail.tpl.html'
	})
	.controller('userDetailController', function () /*$routeParams, userService)*/ {
		//this.userId = $routeParams.userId;
		//this.user = user;//userService.getUserById($routeParams.userId)

	});
