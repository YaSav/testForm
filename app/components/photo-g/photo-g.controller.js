angular
	.module('regApp')
	.component('photoG', {
		controller: 'photoGController',
		controllerAs: '$ctrl',
		templateUrl: './app/components/photo-g/photo-g.tpl.html'
	})
	.controller('photoGController', function ($scope, $interval) {
		const delay = 3000;

		const imageUrls = [
			{ url: 'app/images/1_m.jpg', viewCount: 0 },
			{ url: 'app/images/2.JPG', viewCount: 0 },
			{ url: 'app/images/23365096_10208053221688403_954618729_n.jpg', viewCount: 0 },
			{ url: 'app/images/HoneycombSP3black1-300x300.jpg', viewCount: 0 }
		];

		let activeImageIndex = 0;
		$scope.activeImageUrl = imageUrls[activeImageIndex].url;
		$scope.viewCount = ++imageUrls[activeImageIndex++].viewCount;
		const changeBIInterval = $interval(changeBGImage, delay);

		this.$onDestroy = function() {
			$interval.cancel(changeBIInterval);
		}

		function changeBGImage(){

			$scope.activeImageUrl = imageUrls[activeImageIndex].url;
			$scope.viewCount = ++imageUrls[activeImageIndex++].viewCount;

			if(activeImageIndex === imageUrls.length) {
				activeImageIndex = 0;
			}
	   }
	});
