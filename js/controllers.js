angular.module('test.controllers', []).
controller('HomePageController', ['$scope',
	function($scope) {
		$scope.defaults= {
			tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
			maxZoom: 14,
			path: {
				weight: 10,
				color: '#800000',
				opacity: 1
			}
		}
	}
]);