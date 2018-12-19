angular
	.module('regApp')
	.component('photoG', {
		controller: 'photoGController',
		controllerAs: '$ctrl',
		templateUrl: './app/components/photo-g/photo-g.tpl.html'
	})
	.controller('photoGController', function ($scope, $interval) {
		let view = 0;
		const delay = 1000;

		const imageUrls = [
			'app/images/1_m.jpg',
			'app/images/2.JPG',
			'app/images/23365096_10208053221688403_954618729_n.jpg',
			'app/images/HoneycombSP3black1-300x300.jpg'
		];

		let activeImageIndex = 0;

		this.activeImageUrl = imageUrls[activeImageIndex];

		const changeBIInterval = $interval(changeBGImage, delay);

		this.$onDestroy = function() {
			$interval.cancel(changeBIInterval);
		}

		

		function changeBGImage(){

			//this.activeImageIndex;
			this.activeImageUrl = imageUrls[activeImageIndex++];

			if(activeImageIndex === imageUrls.length) {
				activeImageIndex = 0;
			}
			//$scope.$apply();

			console.log('change', this.activeImageUrl, activeImageIndex);
			//document.getElementById('photoG').className= `bg${++view % 4}`;
	   }
	});
