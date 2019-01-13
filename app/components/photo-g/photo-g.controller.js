angular
	.module('regApp')
	.component('photoG', {
		controller: 'photoGController',
		controllerAs: '$ctrl',
		templateUrl: './app/components/photo-g/photo-g.tpl.html'
	})
	.controller('photoGController', function ($scope, $interval) {
		const delay = 3000;
		let activeImageIndex = 0;
		$scope.images = [
			{ url: 'app/images/1.jpg', color:'#b37968', viewCount: 0, comment: 'Снігурчик, давно їх не бачила' },
			{ url: 'app/images/2.JPG', color:'#2b2c2f', viewCount: 0, comment: 'Моя голова, як брекети ставила робила' },
			{ url: 'app/images/3.jpg', color:'#04656c', viewCount: 0, comment: 'Крісло королівське, в креденсі такі є, хочу собі' },
			{ url: 'app/images/4.jpg', color:'#2b2c2f', viewCount: 0, comment: 'Лампа, просто класна лапма' }
		];
		let setActiveImageInterval;

		this.$onInit = function() {
			setActiveImage();
			setActiveImageInterval = $interval(setActiveImage, delay);
		}		

		this.$onDestroy = function() {
			$interval.cancel(setActiveImageInterval);
		}

		$scope.setImage = function(image) {
			activeImageIndex = $scope.images.findIndex(r=> r === image);
			setActiveImage();
		}

		function setActiveImage(){
			$scope.activeImage = $scope.images[activeImageIndex++];
			++$scope.activeImage.viewCount;

			if(activeImageIndex === $scope.images.length) {
				activeImageIndex = 0;
			}
	   }
	});
