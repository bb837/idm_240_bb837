var audioToggle = document.getElementById('audioToggle');
var mute = document.getElementById("mic_off");
var playing = document.getElementById("mic_on");
var music = document.getElementById("music");
var sound = false;

function playSound () {
    if (sound) {
        music.pause();
        sound = false;
        playing.classList.add('hidden');
        mute.classList.remove('hidden');
        console.log(sound);
    } else {
        music.play(); 
        sound = true;
        playing.classList.remove('hidden')
        mute.classList.add('hidden');
        console.log(sound);
    }
}

audioToggle.addEventListener('click',playSound,false);

var button = document.getElementsByClassName("button");
var site = document.getElementById("btn_site");
var ticket = document.getElementById("btn_ticket")

site.addEventListener('click', function(event) {
    event.preventDefault();
},false);

ticket.addEventListener('click', function(event) {
    event.preventDefault();
},false);
