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

		var HipHopPlaylist = mongoose.model("HipHopPlaylist", ArtistSchema),
				RockPlaylist = mongoose.model("RockPlaylist", ArtistSchema),
				PopPlaylist = mongoose.model("PopPlaylist", ArtistSchema),
				CountryPlaylist = mongoose.model("CountryPlaylist", ArtistSchema);
		
		for(var i = 0; i < artists.hipHop.length; i++){
			HipHopPlaylist(artists.hipHop[i]).save(HipHopPlaylist);
		}

		for(var i = 0; i < artists.rock.length; i++){
			RockPlaylist(artists.rock[i]).save(RockPlaylist);
		}
		
		for(var i = 0; i < artists.pop.length; i++){
			PopPlaylist(artists.pop[i]).save(PopPlaylist);
		}

		for(var i = 0; i < artists.country.length; i++){
			CountryPlaylist(artists.country[i]).save(CountryPlaylist);
		}
		
		app.get ("/getPlaylist", function(req,res,next){
			hipHopPlaylist.find(req.query, function(err, hipHopPlaylist){
				if(err){
					console.log(err);
					}else{
						res.json(hipHopPlaylist);
					}
				res.end();
			});
		});

		app.post ("/updatePlaylist", function(req, res, next) {
		var conditions = {"artist" : req.body.artist};
		var update = {$set : {"likes" : req.body.likes,
								 				 "dislikes" : req.body.dislikes}};
		hipHopPlaylist.update(conditions, update, {multi : false}, function(error, result) {
			if (error) console.log(error);
		});
		res.end();
	});

		app.listen(3000);
		console.log("listening on port 3000");

	};
	main();
}());
