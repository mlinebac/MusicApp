(function(){
	var app = angular.module('music', []);

	app.controller('PlaylistController', ['$scope', function($scope){
		$scope.artist = $scope.title = $scope.path = $scope.likes = $scope.dislikes = '';
		$scope.playlists = [];

		$scope.all = function(){
			$.getJSON('getPlaylist', function(result){
				$scope.playlists = result;
			});
		};

		$scope.update = function(){
			var updateArtist = {"artist" : $scope.artist, "likes" : $scope.likes, "dislikes" : $scope.dislikes};
			$.post('updateArtist', updateArtist);
			$scope.artist = $scope.likes = $scope.dislikes = '';
		};


	};
]);
}());
