(function(){
	var app = angular.module('music', []);

	app.controller('PlaylistController', ['$scope', function($scope){
		$scope.artist = $scope.title = $scope.path = $scope.likes = $scope.dislikes = '';
		$scope.playlist = [];

		$scope.all = function(){
			$.getJSON('getPlaylist', function(result){
				$scope.playlist = result;
			});
		};

		/*$scope.update = function(){
			var updateArtist = {"artist" : $scope.artist, "likes" : $scope.likes, "dislikes" : $scope.dislikes};
			$.post('updateArtist', updateArtist);
			$scope.artist = $scope.likes = $scope.dislikes = '';
		};
*/


	}]);

}());
