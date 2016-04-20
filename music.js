(function(){
	var app = angular.module('music', []);

	app.controller('hipHopPlaylistController',function($scope, $http){
	$http({
  method: 'GET',
  url: '/getHipHopPlaylist'
})
	.then(function(response) {
    $scope.artist = response.data;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
	});

	app.controller('rockPlaylistController',function($scope, $http){
		$http({
		method: 'GET',
		url: '/getRockPlaylist'
	})
	.then(function(response){
		$scope.artist = response.data;
	}, function errorCallback(response) {

	});
	});
app.controller('popPlaylistController',function($scope, $http){
		$http({
		method: 'GET',
		url: '/getPopPlaylist'
	})
	.then(function(response){
		$scope.artist = response.data;
	}, function errorCallback(response) {

	});
	});
	app.controller('countryPlaylistController',function($scope, $http){
		$http({
		method: 'GET',
		url: '/getCountryPlaylist'
	})
	.then(function(response){
		$scope.artist = response.data;
	}, function errorCallback(response) {

	});
	});
		/*$scope.update = function(){
			var updateArtist = {"artist" : $scope.artist, "likes" : $scope.likes, "dislikes" : $scope.dislikes};
			$.post('updateArtist', updateArtist);
			$scope.artist = $scope.likes = $scope.dislikes = '';
		};
*/




}());
