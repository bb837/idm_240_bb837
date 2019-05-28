var audioToggle = document.getElementById('mic');
var music = document.getElementById("music");
var sound = false;

function playSound () {
    if (sound) {
        music.pause();
        sound = false;
        console.log(sound);
    } else {
        music.play(); 
        sound = true;
        console.log(sound);
    }
}

audioToggle.addEventListener('click',playSound,false);
