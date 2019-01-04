angular
	.module('regApp')
	.component('userDetail', {
		bindings: {
			user: '<'
		},
		templateUrl: './app/components/user-detail/user-detail.tpl.html'
	});
