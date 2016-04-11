(function () {
	"use strict";

	var main = function () {
		var express = require("express"),
				bodyParser = require("body-parser"),
				mongoose = require("mongoose"),
				app = new express();

		app.use(express.static(__dirname));
		app.use(bodyParser.urlencoded({ extended: true}));

		mongoose.connect("mongodb://localhost/musicWarehouse");

		var ArtistSchema = mongoose.Schema({
				"name" : String,
				"genre" : String,
				"album" : String,
				"likes" : Number,
				"dislikes" : Number});

		var Artist = mongoose.model("Artist", ArtistSchema);

		app.use(function(req, res, next){
			console.log('%s %s', req.method, req.url);
			next();
		});

		app.get("/getArtist", function(req, res, next) {
			Artist.find(req.query, function(err, artist) {
				if(err) {
					console.log(err);
					} else {
							res.json(artist);
					}
				res.end();
			});
		});

		app.post("/putArtist", function(req, res, next) {
			var newArtist = new Artist(req.body);
			newArtist.save(function(error, data) {
				if (error) console.log(error);
			});
			res.end();
		});

		app.listen(3000);
		console.log("listening on port 3000");

	};

	main();

}());
