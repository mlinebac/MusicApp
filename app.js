(function () {
	"use strict";

	var main = function () {
		var express = require("express"),
				bodyParser = require("body-parser"),
				mongoose = require("mongoose"),
			  artists = require("./artists"),
				app = new express();
				
		app.use(express.static(__dirname));
		app.use(bodyParser.urlencoded({ extended: true}));
	
		mongoose.connect("mongodb://localhost/music");
		
		var ArtistSchema = mongoose.Schema({
				"artist" : String,
				"title" : String,
				"path" : String,
				"likes" : Number,
				"dislikes" : Number});

		var HipHopArtist = mongoose.model("HipHopArtist", ArtistSchema),
				RockArtist = mongoose.model("RockArtist", ArtistSchema),
				PopArtist = mongoose.model("PopArtist", ArtistSchema),
				CountryArtist = mongoose.model("CountryArtist", ArtistSchema);
		
		for(var i = 0; i < artists.hipHop.length; i++){
			var newHipHopArtist = new HipHopArtist(artists.hipHop[i]);
				newHipHopArtist.save(newHipHopArtist);
			}

		for(var i = 0; i < artists.rock.length; i++){
			var newRockArtist = new RockArtist(artists.rock[i]);
				newRockArtist.save(newRockArtist);
		}
		
		for(var i = 0; i < artists.pop.length; i++){
			var newPopArtist = new PopArtist(artists.pop[i]);
				newPopArtist.save(newPopArtist);
		}

		for(var i = 0; i < artists.country.length; i++){
			var newCountryArtist = new CountryArtist(artists.country[i]);
				newCountryArtist.save(newCountryArtist);
		}
		
		app.listen(3000);
		console.log("listening on port 3000");

	};

	main();

}());
