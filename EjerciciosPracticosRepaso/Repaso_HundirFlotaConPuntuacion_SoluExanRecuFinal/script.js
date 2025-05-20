let barcos = ["barco4", "barco1", "barco2", "barco3"];
let agua = "agua";
let estrellas = ["estrella", "estrellaBrilla"];
let puntosIniciales = 3;

function devolverNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

function cargarBarcos() {
    let barcosUsados = new Set();
    let completado = 0;

    while (completado < 4) {
        let numPosicion = devolverNumero(0, 11);
        let posicionImagen = "imagen" + numPosicion;
        let nombreImagenBarco = "./imagenes/" + barcos[completado] + ".png";

        let elemento = document.getElementById(posicionImagen);
        if (elemento && !barcosUsados.has(posicionImagen)) {
            elemento.setAttribute("src", nombreImagenBarco);
            barcosUsados.add(posicionImagen);
            completado++;
        }
    }
}

function cargarEstrellas() {
    let estrellasUsadas = new Set();
    let completado = 0;

    while (completado < 3) {
        let numPosicion = devolverNumero(0, 11);
        let posicionImagen = "imagen" + numPosicion;
        let nombreImagenEstrella = "./imagenes/" + estrellas[devolverNumero(0, estrellas.length - 1)] + ".png";

        let elemento = document.getElementById(posicionImagen);
        if (elemento && (!elemento.getAttribute("src") || elemento.getAttribute("src") === "") && !estrellasUsadas.has(posicionImagen)) {
            elemento.setAttribute("src", nombreImagenEstrella);
            estrellasUsadas.add(posicionImagen);
            completado++;
        }
    }
}

function cargarAgua() {
    let posiciones = document.getElementsByClassName("imagen");

    for (let i = 0; i < posiciones.length; i++) {
        let posicion = posiciones[i];
        let src = posicion.getAttribute("src");

        if (!src || src === "") {
            let nombreImagenAgua = "./imagenes/" + agua + ".png";
            posicion.setAttribute("src", nombreImagenAgua);
        }
    }
}

function ocultarBarcos() {
    let elemento = document.getElementsByClassName("imagen");
    for (let i = 0; i < elemento.length; i++) {
        elemento[i].classList.add("oculto");
    }
}

function ocultarImagenes() {
    document.getElementById("play").addEventListener("click", ocultarBarcos);
}
function comprobarImagenes(idElemento) {
    let elemento = document.getElementById(idElemento);
    let src = elemento.getAttribute("src");
    let puntosActuales = parseInt(document.getElementById("puntos").textContent);

    if (!src) {
        alert("No hay imagen en esta posición.");
        return;
    }

    if (src.includes("barco")) {
        if (src.includes("barco1")) {
            alert("¡Encontraste un barco tipo 1!");
            puntosActuales += 1;
        } else if (src.includes("barco2")) {
            alert("¡Encontraste un barco tipo 2!");
            puntosActuales += 2;
        } else if (src.includes("barco3")) {
            alert("¡Encontraste un barco tipo 3!");
            puntosActuales += 3;
        } else if (src.includes("barco4")) {
            alert("¡Encontraste un barco tipo 4!");
            puntosActuales += 4;
        }
    } else if (src.includes("estrella")) {
        if (src.includes("estrellaBrilla")) {
            alert("¡Encontraste una estrella brillante!");
            puntosActuales += 10;
        } else {
            alert("¡Encontraste una estrella!");
            puntosActuales += 5;
        }
    } else if (src.includes("agua")) {
        alert("¡Encontraste agua!");
        puntosActuales -= 3;
    }

    document.getElementById("puntos").textContent = puntosActuales;
    verificarPuntos();
    // Parpadeo de la imagen
    let contador = 0;
    let intervalo = setInterval(() => {
        elemento.classList.toggle("oculto");
        contador++;
        
        if (contador === 6) {
            clearInterval(intervalo);
            elemento.classList.remove("oculto");
        }
    }, 300);
}

function verificarPuntos() {
    let puntosActuales = parseInt(document.getElementById("puntos").textContent);
    if (puntosActuales >= 10) {
        alert("¡Has ganado! El juego se reiniciará.");
        reiniciarJuego();
    }
    
    if (puntosActuales <=0) {
        alert("¡Has perdido! El juego se reiniciará.");
        reiniciarJuego();
    }
}

function reiniciarJuego() {
    // Reiniciamos los puntos a 3
    document.getElementById("puntos").textContent = puntosIniciales;
    
    // Volvemos a cargar las imágenes
    cargarBarcos();
    cargarEstrellas();
    cargarAgua();
    // Ocultamos las imágenes
    ocultarBarcos();
    

}
function ocultarPolicia() {
    let policia = document.getElementById("policia");
    policia.getAttribute("src");
    if (policia.getAttribute("src") === "./imagenes/mostrar.png") {
        policia.setAttribute("src", "./imagenes/ocultar.png");
    }
    else {
        policia.setAttribute("src", "./imagenes/mostrar.png");
    }
}

window.onload = function () {
    cargarBarcos();
    cargarEstrellas();
    cargarAgua();
   
    document.getElementById("play").addEventListener("click", ocultarBarcos);
    document.getElementById("policia").addEventListener("click", ocultarPolicia);
    for (let i = 0; i < 12; i++) {
        document.getElementById("imagen" + i).addEventListener("click", function () {
            comprobarImagenes("imagen" + i);
        });
    }
};