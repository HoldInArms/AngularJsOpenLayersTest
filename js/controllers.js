angular.module('test.controllers', []).
controller('HomePageController', ['$scope',
	function($scope) {
		$scope.defaults = {

			tileLayer: {
				type: "TMS",
				url: "pics/cat/",
				serviceVersion: "dev",
				layername: "basic",
				fileExtension: "jpg"
				//url: "http://a.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png"
			},
			//tileLayer: "pics/cat_{x}_{y}.jpg",
			maxZoom: 1,
			path: {
				weight: 10,
				color: '#80000',
				opacity: 1
			}
		}
	}
]);