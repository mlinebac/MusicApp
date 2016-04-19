(function(){
	var app = angular.module('music', []);

	app.controller('PlaylistController', ['$scope', function($scope){
		$scope.artist = $scope.title = $scope.path = $scope.likes = $scope.dislikes = '';
		$scope.playlists = [];

	};
]);
}());
