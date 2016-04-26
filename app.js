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
				"path" : String
				});

		var HipHopPlaylist = mongoose.model("HipHopPlaylist", ArtistSchema),
				RockPlaylist = mongoose.model("RockPlaylist", ArtistSchema),
				PopPlaylist = mongoose.model("PopPlaylist", ArtistSchema),
				CountryPlaylist = mongoose.model("CountryPlaylist", ArtistSchema);

		//creates route so music.js can get playlists from monogoDB "music"
		app.get ("/getHipHopPlaylist", function(req,res,next){
			HipHopPlaylist.find(req.query, function(err, HipHopPlaylist){
				if(err){
					console.log(err);
					}else{
						console.log(HipHopPlaylist);
						res.json(HipHopPlaylist);
					}
				res.end();
			});
		});
		app.get("/getRockPlaylist", function(req,res,next){
			RockPlaylist.find(req.query, function(err, RockPlaylist){
				if(err){
					console.log(err);
					}else{
						console.log(RockPlaylist);
						res.json(RockPlaylist);
					}
				res.end();
			});
		});
		app.get("/getPopPlaylist", function(req,res,next){
			PopPlaylist.find(req.query, function(err, PopPlaylist){
				if(err){
					console.log(err);
					}else{
						console.log(PopPlaylist);
						res.json(PopPlaylist);
					}
				res.end();
			});
		});
		app.get("/getCountryPlaylist", function(req,res,next){
			CountryPlaylist.find(req.query, function(err, CountryPlaylist){
				if(err){
					console.log(err);
					}else{
						console.log(CountryPlaylist);
						res.json(CountryPlaylist);
					}
				res.end();
			});
		});

/*gets playlists from artists.js and puts them into mongoDB "music"
		for(var i = 0; i < artists.hipHop.length; i++){
				HipHopPlaylist(artists.hipHop[i]).save(HipHopPlaylist);
		};

		for(var i = 0; i < artists.rock.length; i++){
			RockPlaylist(artists.rock[i]).save(RockPlaylist);
		};

		for(var i = 0; i < artists.pop.length; i++){
			PopPlaylist(artists.pop[i]).save(PopPlaylist);
		};

		for(var i = 0; i < artists.country.length; i++){
			CountryPlaylist(artists.country[i]).save(CountryPlaylist);
		};
		*/

		app.listen(3000);
		console.log("listening on port 3000");

		};
	main();
}());

