/**
   Modified by: Charles Williams
   Source: http://jsfiddle.net/arunpjohny/rxs8xfLn/1/
   */
(function () {
    "use strict";

    var main = function () {
        var audio = document.getElementById('my_audioPlayer'),
            hipHopPlaylist = document.getElementById('genreBox1'),
            rockPlaylist = document.getElementById('genreBox2'),
            popPlaylist = document.getElementById('genreBox3'),
            countryPlaylist = document.getElementById('genreBox4'),
            i = 0,
            hipHop = [{
                "artist": "The Chain Smokers",
                "title": "Don't Let Me Down",
                "path": "Music/The%20Chainsmokers%20Featuring%20Daya%20-%20Don't%20Let%20Me%20Down.mp3"
        }, {
                "artist": "DJ Snake",
                "title": "Middle",
                "path": "Music/DJ%20Snake%20ft.%20Bipolar%20Sunshine%20-%20Middle.mp3"
        }, {
                "artist": "G-Eazy",
                "title": "Me,Myself, and I",
                "path": "Music/G-Eazy%20x%20Bebe%20Rexha%20-%20Me,%20Myself%20_%20I.mp3"
            }],

            rock = [{
                "artist": "Coldplay",
                "title": "Adventure of a Lifetime",
                "path": "Music/Coldplay%20-%20Adventure%20of%20a%20Lifetime.mp3"
        }, {
                "artist": "Disturbed",
                "title": "The Sound of Silence",
                "path": "Music/Disturbed%20-%20The%20Sound%20Of%20Silence.mp3"
        }, {
                "artist": "Ellen King",
                "title": "America's Sweetheart",
                "path": "Music/Elle%20King%20-%20Americas%20Sweetheart.mp3"
            }],

            pop = [{
                "artist": "Flo Rida",
                "title": "My House",
                "path": "Music/Flo%20Rida%20-%20My%20House.mp3"
        }, {
                "artist": "DNCE",
                "title": "Cake By The Ocean",
                "path": "Music/DNCE%20-%20Cake%20By%20The%20Ocean.mp3"
        }, {
                "artist": "G-Eazy",
                "title": "Me,Myself, and I",
                "path": "Music/G-Eazy%20x%20Bebe%20Rexha%20-%20Me,%20Myself%20_%20I.mp3"
            }],

            country = [{
                "artist": "Blake Shelton",
                "title": "Came Here to Forget",
                "path": "Music/Blake%20Shelton%20-%20Came%20Here%20To%20Forget.mp3"
        }, {
                "artist": "Brett Eldredge",
                "title": "Drunk on Your Love",
                "path": "Music/Brett%20Eldredge%20-%20Drunk%20On%20Your%20Love.mp3"
        }, {
                "artist": "Chris Young",
                "title": "Think of You",
                "path": "Music/Chris%20Young%20Duet%20with%20Cassadee%20Pope%20-%20Think%20of%20You.mp3"
            }];

        hipHopPlaylist.addEventListener('click', function () {
            audio.src = hipHop[0].path;
            audio.addEventListener('ended', function () {
                i++;
                if (i > hipHop.length) {
                    i = 0;
                }
                console.log(i)
                audio.src = hipHop[i].path;
                audio.play();
            }, true);
        }, true);

        rockPlaylist.addEventListener('click', function () {
            audio.src = rock[0].path;
            audio.addEventListener('ended', function () {
                i++;
                if (i > rock.length) {
                    i = 0;
                }
                console.log(i)
                audio.src = rock[i].path;
                audio.play();
            }, true);
        }, true);

        popPlaylist.addEventListener('click', function () {
            audio.src = pop[0].path;
            audio.addEventListener('ended', function () {
                i++;
                if (i > pop.length) {
                    i = 0;
                }
                console.log(i)
                audio.src = pop[i].path;
                audio.play();
            }, true);
        }, true);

        countryPlaylist.addEventListener('click', function () {
            audio.src = country[0].path;
            audio.addEventListener('ended', function () {
                i++;
                if (i > country.length) {
                    i = 0;
                }
                console.log(i)
                audio.src = country[i].path;
                audio.play();
            }, true);
        }, true);


        audio.volume = 0.3;
        audio.loop = false;
        audio.src = " ";
        audio.play();
    };

    $(document).ready(function () {
        main();
    });
}());
