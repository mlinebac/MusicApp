(function () {
    "use strict";

    var main = function () {
        var audioPlayer, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn;

        var intializePlayer = function () {
            // Set object references
            audioPlayer = document.getElementById("my_audioPlayer");
            playbtn = document.getElementById("playpausebtn");
            seekslider = document.getElementById("seekslider");
            curtimetext = document.getElementById("curtimetext");
            durtimetext = document.getElementById("durtimetext");
            mutebtn = document.getElementById("mutebtn");
            volumeslider = document.getElementById("volumeslider");
            // Add event listeners
            playbtn.addEventListener("click", playPause, false);
            seekslider.addEventListener("change", audioPlayerSeek, false);
            audioPlayer.addEventListener("timeupdate", seektimeupdate, false);
            mutebtn.addEventListener("click", audioPlayermute, false);
            volumeslider.addEventListener("change", setvolume, false);
        };

        window.onload = intializePlayer;

        var playPause = function () {
            if (audioPlayer.paused) {
                audioPlayer.play();
                playbtn.innerHTML = "&#10074 &#10074;";
            } else {
                audioPlayer.pause();
                playbtn.innerHTML = "&#9658";
            }
        };

        var audioPlayerSeek = function () {
            var seekto = audioPlayer.duration * (seekslider.value / 100);
            audioPlayer.currentTime = seekto;
        };

        var seektimeupdate = function () {
            var nt = audioPlayer.currentTime * (100 / audioPlayer.duration);
            seekslider.value = nt;
            var curmins = Math.floor(audioPlayer.currentTime / 60);
            var cursecs = Math.floor(audioPlayer.currentTime - curmins * 60);
            var durmins = Math.floor(audioPlayer.duration / 60);
            var dursecs = Math.floor(audioPlayer.duration - durmins * 60);
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

        var audioPlayermute = function () {
            if (audioPlayer.muted) {
                audioPlayer.muted = false;
                mutebtn.innerHTML = "&#128266";
            } else {
                audioPlayer.muted = true;
                mutebtn.innerHTML = "&#128263";
            }
        };

        var setvolume = function () {
            audioPlayer.volume = volumeslider.value / 100;
        };

    };

    main();
}());
