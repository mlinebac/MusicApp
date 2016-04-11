(function(){
	"use strict";

	var main = function(){
		var express = require("express"),
				bodyParser = require("body-parser"),
				mongoose = require("mongoose"),
				app = express();

		app.use(express.static(__dirname));
		app.use(bodyParser.urlencoded({ extended: true}));

		mongoose.connect("mongodb://localhost/musicWarehouse");

		var ArtistSchema = mongoose.Schema({
				"name" : String,
				"genre" : String,
				"album" : String,
				"likes" : Number,
				"dislikes" : Number});

		var Item = mongoose.model("Artist", ArtistSchema);

		app.get("/getArtist", function(req,res){
			Artist.find(req.query, function(err, artist){
				if(err !== null){
					res.send("ERROR");
					} else {
							res.send(artist);
					}
			});
		});
		app.post("/putArtist", function(req,res){
			var newArtist = new Artist({"name" : req.body.name,
																 	"genre" : req.body.genre,
																 	"album" : req.body.album,
																 	"likes" : req.body.likes,
																 	"dislikes" : req.body.dislikes});
			newArtist.save(function(err, result){
				if (err !== null) {
					console.log(err);
					res.send("ERROR");
					} else {
							res.send("Artist imported and uploaded");
					}
			});
		});
		app.listen(3000);
		console.log("listening on port 3000");
	};

	main();

}());
