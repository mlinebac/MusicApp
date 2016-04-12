(function () {
    "use strict";

    var main = function () {
        var vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn;

        var intializePlayer = function() {
            // Set object references
            vid = document.getElementById("my_video");
            playbtn = document.getElementById("playpausebtn");
            seekslider = document.getElementById("seekslider");
            curtimetext = document.getElementById("curtimetext");
            durtimetext = document.getElementById("durtimetext");
            mutebtn = document.getElementById("mutebtn");
            volumeslider = document.getElementById("volumeslider");
            // Add event listeners
            playbtn.addEventListener("click", playPause, false);
            seekslider.addEventListener("change", vidSeek, false);
            vid.addEventListener("timeupdate", seektimeupdate, false);
            mutebtn.addEventListener("click", vidmute, false);
            volumeslider.addEventListener("change", setvolume, false);
        };

        window.onload = intializePlayer;

        var playPause = function() {
            if (vid.paused) {
                vid.play();
                playbtn.innerHTML = "&#9612 &#9612";
            } else {
                vid.pause();
                playbtn.innerHTML = "&#9658";
            }
        };

        var vidSeek = function() {
            var seekto = vid.duration * (seekslider.value / 100);
            vid.currentTime = seekto;
        };

        var seektimeupdate = function() {
            var nt = vid.currentTime * (100 / vid.duration);
            seekslider.value = nt;
            var curmins = Math.floor(vid.currentTime / 60);
            var cursecs = Math.floor(vid.currentTime - curmins * 60);
            var durmins = Math.floor(vid.duration / 60);
            var dursecs = Math.floor(vid.duration - durmins * 60);
            if (cursecs < 10) {
                cursecs = "0" + cursecs;
            }
            if (dursecs < 10) {
                dursecs = "0" + dursecs;
            }
            if (curmins < 10) {
                curmins = "0" + curmins;
            }
            if (durmins < 10) {
                durmins = "0" + durmins;
            }
            curtimetext.innerHTML = curmins + ":" + cursecs;
            durtimetext.innerHTML = durmins + ":" + dursecs;
        };

        var vidmute = function() {
            if (vid.muted) {
                vid.muted = false;
                mutebtn.innerHTML = "&#128266";
            } else {
                vid.muted = true;
                mutebtn.innerHTML = "&#128263";
            }
        };

        var setvolume = function() {
            vid.volume = volumeslider.value / 100;
        };
    };

    main();
}());
