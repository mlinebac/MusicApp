(function () {
	"use strict";

	var main = function () {
		var express = require("express"),
				bodyParser = require("body-parser"),
				mongoose = require("mongoose"),
			  artists = require("./artists"),
				app = new express();
		
		
		console.log(artists.rock);
				

		app.use(express.static(__dirname + "/Playlists/playlistPage1.html"));
		app.use(bodyParser.urlencoded({ extended: true}));
	
		mongoose.connect("mongodb://localhost/music");
		
		var ArtistSchema = mongoose.Schema({
				"artist" : String,
				"title" : String,
				"path" : String,
				"likes" : Number,
				"dislikes" : Number});

		var RockArtist = mongoose.model("RockArtist", ArtistSchema);
	
		var newRockArtist = new RockArtist(artists.rock[0]);
		
		
		
		app.listen(3000);
		console.log("listening on port 3000");

	};

	main();

}());
