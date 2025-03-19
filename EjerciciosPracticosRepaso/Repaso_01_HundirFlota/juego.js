// Constantes
const barcos = ["barco4", "barco1", "barco2", "barco3"];
const agua = "agua";
const estrellas = ["estrella", "estrellaBrilla"];
const puntosIniciales = 3;

// Función para generar un número aleatorio
const devolverNumero = (minimo, maximo) => Math.floor(Math.random() * (maximo - minimo + 1) + minimo);

// Función para cargar barcos en posiciones aleatorias
const cargarBarcos = () => {
    const barcosUsados = new Set();
    let completado = 0;

    while (completado < 4) {
        const numPosicion = devolverNumero(0, 11);
        const posicionImagen = `imagen${numPosicion}`;
        const nombreImagenBarco = `./imagenes/${barcos[completado]}.png`;

        const elemento = document.getElementById(posicionImagen);
        if (elemento && !barcosUsados.has(posicionImagen)) {
            elemento.setAttribute("src", nombreImagenBarco);
            barcosUsados.add(posicionImagen);
            completado++;
        }
    }
};

// Función para cargar estrellas en posiciones vacías
const cargarEstrellas = () => {
    const estrellasUsadas = new Set();
    let completado = 0;

    while (completado < 3) {
        const numPosicion = devolverNumero(0, 11);
        const posicionImagen = `imagen${numPosicion}`;
        const nombreImagenEstrella = `./imagenes/${estrellas[devolverNumero(0, estrellas.length - 1)]}.png`;

        const elemento = document.getElementById(posicionImagen);
        if (elemento && (!elemento.getAttribute("src") || elemento.getAttribute("src") === "") && !estrellasUsadas.has(posicionImagen)) {
            elemento.setAttribute("src", nombreImagenEstrella);
            estrellasUsadas.add(posicionImagen);
            completado++;
        }
    }
};

// Función para llenar las posiciones restantes con agua
const cargarAgua = () => {
    const posiciones = document.getElementsByClassName("imagen");

    Array.from(posiciones).forEach(posicion => {
        const src = posicion.getAttribute("src");
        if (!src || src === "") {
            posicion.setAttribute("src", `./imagenes/${agua}.png`);
        }
    });
};

// Función para ocultar todas las imágenes al hacer clic en "play"
const ocultarImagenes = () => {
    document.getElementById("play").addEventListener("click", () => {
        const imagenes = document.getElementsByClassName("imagen");
        Array.from(imagenes).forEach(imagen => imagen.classList.add("oculto"));
    });
};

// Función para verificar el tipo de imagen y actualizar los puntos
const comprobarImagenes = idElemento => {
    const elemento = document.getElementById(idElemento);
    const src = elemento.getAttribute("src");
    let puntosActuales = parseInt(document.getElementById("puntos").textContent);

    if (!src) {
        alert("No hay imagen en esta posición.");
        return;
    }

    if (src.includes("barco")) {
        const tipoBarco = barcos.find(barco => src.includes(barco));
        const puntosBarco = barcos.indexOf(tipoBarco) + 1;
        alert(`¡Encontraste un ${tipoBarco}!`);
        puntosActuales += puntosBarco;
    } else if (src.includes("estrella")) {
        const puntosEstrella = src.includes("estrellaBrilla") ? 10 : 5;
        alert(`¡Encontraste una ${src.includes("estrellaBrilla") ? "estrella brillante" : "estrella"}!`);
        puntosActuales += puntosEstrella;
    } else if (src.includes("agua")) {
        alert("¡Encontraste agua!");
        puntosActuales -= 3;
    }

    document.getElementById("puntos").textContent = puntosActuales;
    verificarPuntos();

    // Parpadeo de la imagen
    let contador = 0;
    const intervalo = setInterval(() => {
        elemento.classList.toggle("oculto");
        contador++;
        if (contador === 4) {
            clearInterval(intervalo);
            elemento.classList.remove("oculto");
        }
    }, 300);
};

// Función para verificar si los puntos son 0 y reiniciar el juego
const verificarPuntos = () => {
    const puntosActuales = parseInt(document.getElementById("puntos").textContent);
    if (puntosActuales <= 0) {
        alert("¡Has perdido! El juego se reiniciará.");
        reiniciarJuego();
    }
};

// Función para reiniciar el juego
const reiniciarJuego = () => {
    document.getElementById("puntos").textContent = puntosIniciales;
    cargarBarcos();
    cargarEstrellas();
    cargarAgua();
    ocultarBarcos();
};

// Función para alternar la imagen del policía
const ocultarPolicia = () => {
    const policia = document.getElementById("policia");
    const srcActual = policia.getAttribute("src");
    policia.setAttribute("src", srcActual === "./imagenes/mostrar.png" ? "./imagenes/ocultar.png" : "./imagenes/mostrar.png");
};

// Inicialización del juego
window.onload = () => {
    cargarBarcos();
    cargarEstrellas();
    cargarAgua();
    ocultarImagenes();

    document.getElementById("policia").addEventListener("click", ocultarPolicia);

    for (let i = 0; i < 12; i++) {
        document.getElementById(`imagen${i}`).addEventListener("click", () => comprobarImagenes(`imagen${i}`));
    }
};