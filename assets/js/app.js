const $tituloCancion = document.querySelector(".reproductor-musica h1");
const $nombreArtista = document.querySelector(".reproductor-musica p");

const $progreso = document.querySelector('#progreso');
const $cancion = document.querySelector('#cancion');

const $iconoControl = document.querySelector("#icono-control");
const $botonReproducirPausar = document.querySelector(".controles .boton-reproducir-pausar");


const $botonAtras = document.querySelector(".controles .atras");
const $botonAdelante = document.querySelector(".controles .adelante");

const canciones = [
    {
        titulo: 'New Rules',
        nombre: 'Dua Lipa',
        fuente: './assets/music/Dua Lipa - New Rules.mp3'
    },
    {
        titulo: 'Pretty Please',
        nombre: 'Dua Lipa',
        fuente: './assets/music/Dua Lipa - Pretty Please.mp3'
    },
    {
        titulo: 'These Walls',
        nombre: 'Dua Lipa',
        fuente: './assets/music/Dua Lipa - These Walls.mp3'
    },
    {
        titulo: 'Cold Heart  PNAU Remix',
        nombre: 'Elton John - Dua Lipa',
        fuente: './assets/music/Elton John, Dua Lipa - Cold Heart  PNAU Remix.mp3'
    }
]

let indiceCancionActual = 0

function actualizarInfoCancion() {
    $tituloCancion.textContent = canciones[indiceCancionActual].titulo
    $nombreArtista.textContent = canciones[indiceCancionActual].nombre
    $cancion.src = canciones[indiceCancionActual].fuente
    $cancion.addEventListener('loadeddata', function(){})
}

$botonReproducirPausar.addEventListener('click', reproducirPausar)

function reproducirPausar() {
    if ($cancion.paused) {
        reproducirCancion()
        $iconoControl.classList.add("bi-pause-fill")
        $iconoControl.classList.remove("bi-play-fill")
    } else {
        pausarCancion()
        $iconoControl.classList.remove("bi-pause-fill")
        $iconoControl.classList.add("bi-play-fill")
    }
}

function reproducirCancion() {
    $cancion.play()
}

function pausarCancion() {
    $cancion.pause()
}


actualizarInfoCancion();


