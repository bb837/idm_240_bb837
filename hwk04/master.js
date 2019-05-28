var audioToggle = document.getElementById('mic');
var mute = document.getElementById("mic-off");
var music = document.getElementById("music");
var sound = false;

function playSound () {
    if (sound) {
        music.pause();
        sound = false;
        mute.classList.remove('hidden');
        console.log(sound);
    } else {
        music.play(); 
        sound = true;
        mute.classList.add('hidden');
        console.log(sound);
    }
}

audioToggle.addEventListener('click',playSound,false);
