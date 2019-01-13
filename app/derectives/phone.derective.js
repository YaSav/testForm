app.directive('phonenumber', function () {
	return {
		require: 'ngModel',
		restrict: 'A',
		//why i need this?
		link: function (scope, elm, attrs, $ctrl) {
			var phoneRegex = /^(\+38)?[ ]?(\(([0-9]{3})\)|([0-9]{3}))[- ]?([0-9]{3})[- ]?([0-9]{4})$/;

			$ctrl.$validators.phonenumber = function (modelValue, viewValue) {
				if(!modelValue) {
					return true;
				}
				return modelValue.match(phoneRegex);
			};
		}
	};
});