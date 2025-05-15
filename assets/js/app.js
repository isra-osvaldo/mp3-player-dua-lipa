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
    $cancion.addEventListener('loadeddata', () => {})
}

$botonReproducirPausar.addEventListener('click', reproducirPausar)

function reproducirPausar() {
    if ($cancion.paused) {
        reproducirCancion()
    } else {
        pausarCancion()
    }
}

function reproducirCancion() {
    $cancion.play()
    $iconoControl.classList.add("bi-pause-fill")
    $iconoControl.classList.remove("bi-play-fill")
}

function pausarCancion() {
    $cancion.pause()
    $iconoControl.classList.remove("bi-pause-fill")
    $iconoControl.classList.add("bi-play-fill")
}

$cancion.addEventListener('timeupdate', () => {
    if (!$cancion.paused) {
        $progreso.value = $cancion.currentTime
    }
})

$progreso.addEventListener('input', () => {
    $cancion.currentTime = $progreso.value
})

$progreso.addEventListener('change', () => {
    reproducirCancion()
})

actualizarInfoCancion();


