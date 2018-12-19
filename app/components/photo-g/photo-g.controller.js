angular
	.module('regApp')
	.component('photoG', {
		controller: 'photoGController',
		controllerAs: '$ctrl',
		templateUrl: './app/components/photo-g/photo-g.tpl.html'
	})
	.controller('photoGController', function ($interval) {
		let view = 0;
		const delay = 3000;

		$interval(changeBGImage, delay);

		function changeBGImage(){
			document.getElementById('photoG').className= `bg${++view % 4}`;
	   }
	});
