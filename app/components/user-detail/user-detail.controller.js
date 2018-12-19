angular
	.module('regApp')
	.component('userDetail', {
		controller: 'userDetailController',
		controllerAs: '$ctrl',
		templateUrl: './app/components/user-detail/user-detail.tpl.html'
	})
	.controller('userDetailController', function (user) /*$routeParams, userService)*/ {
		//this.userId = $routeParams.userId;
		this.user = user;//userService.getUserById($routeParams.userId)

	});
