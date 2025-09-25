function reproducirSonido() {
    var audio = document.getElementById("miSonido");
    audio.play();
}

function detenerSonido() {
    var audio = document.getElementById("miSonido");
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio a cero
}


   Reveal.initialize();
