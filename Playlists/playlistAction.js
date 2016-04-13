/**
   Modified by: Charles Williams
   Source: http://jsfiddle.net/arunpjohny/rxs8xfLn/1/
   */
(function () {
    "use strict";

    var main = function () {
        var audio = document.getElementById('my_audioPlayer'),
            i = 0;
        var playlist = [{
            "artist": "The Chain Smokers",
            "title": "Don't Let Me Down",
            "path": "../Music/The%20Chainsmokers%20Featuring%20Daya%20-%20Don't%20Let%20Me%20Down.mp3"
        }, {
            "artist": "DJ Snake",
            "title": "Middle",
            "path": "../Music/DJ%20Snake%20ft.%20Bipolar%20Sunshine%20-%20Middle.mp3"
        },{"artist": "G-Eazy",
            "title": "Me,Myself, and I",
            "path": "../Music/G-Eazy%20x%20Bebe%20Rexha%20-%20Me,%20Myself%20_%20I.mp3"}];

        audio.addEventListener('ended', function () {
            i = ++i < playlist.length ? i : 0;
            console.log(i)
            audio.src = playlist[i].path;
            audio.play();
        }, true);
        audio.volume = 0.3;
        audio.loop = false;
        audio.src = playlist[0].path;
        audio.play();
    };

    $(document).ready(function () {
        main();
    });
}());
