(function() {
	var app = angular.module('musicWarehouse', []);

	app.controller('ArtistController', ['$scope', function($scope) {
		$scope.name = $scope.genre = $scope.album = $scope.likes = $scope.dislikes = '';
		$scope.artist = [];

		$scope.all = function() {
			$.getJSON('getArtist', function(result) {
				$scope.artist = result;
			});
		};

		$scope.add = function() {
			var newArtist = {
				"name" : $scope.name,
				"genre" : $scope.genre,
				"album" : $scope.album,
				"likes" : $scope.likes,
				"dislikes" : $scope.dislikes
			};
			$scope.artist.push(newArtist);
			$.post('putArtist', newArtist);
			$scope.name = $scope.genre = $scope.album = $scope.likes = $scope.dislikes = '';
		};
	}]);
}());
