// Constantes
const barcos = ["barco1","barco2","barco3","barco4"];
const agua = "agua";
const estrellas = ["estrella","estrellaBrilla"];
const puntosIniciales = 3;

// Función para generar un número aleatorio
const devolverNumero = (minimo, maximo) => Math.floor(Math.random() * (maximo - minimo + 1) + minimo);

// Función genérica para cargar imágenes en el tablero
const cargarImagenes = (numBarcos, numEstrellas) => {
    const posicionesUsadas = new Set();
    const totalPosiciones = 12;

    // Función para asignar imágenes a posiciones aleatorias
    const asignarImagenes = (cantidad, tipoImagenes) => {
        let completado = 0;

        while (completado < cantidad) {
            const numPosicion = devolverNumero(0, totalPosiciones - 1);
            const posicionImagenId = `imagen${numPosicion}`;
            //const nombreImagen = `./imagenes/${tipoImagenes[devolverNumero(0, tipoImagenes.length - 1)]}.png`;
            const nombreImagen = "./imagenes/"+tipoImagenes[devolverNumero(0, tipoImagenes.length - 1)]+".png";

            const elemento = document.getElementById(posicionImagenId);
            if (elemento && !posicionesUsadas.has(posicionImagenId)) {
                elemento.setAttribute("src", nombreImagen);
                posicionesUsadas.add(posicionImagenId);
                completado++;
            }
        }
    };

    // Cargar barcos
    asignarImagenes(numBarcos, barcos);

    // Cargar estrellas
    asignarImagenes(numEstrellas, estrellas);

    // Llenar el resto con agua
    const posiciones = document.getElementsByClassName("imagen");
    Array.from(posiciones).forEach(posicion => {
        const id = posicion.id;
        if (!posicionesUsadas.has(id)) {
            posicion.setAttribute("src", `./imagenes/${agua}.png`);
        }
    });
};

// Función para ocultar todas las imágenes al hacer clic en "play"
const ocultarImagenes = () => {
    document.getElementById("play").addEventListener("click", () => {
        const imagenes = document.getElementsByClassName("imagen");
       // Array.from(imagenes).forEach(imagen => imagen.classList.add("oculto"));
      
       /*  for (let i = 0; i < imagenes.length; i++) {
            imagenes[i].classList.add("oculto");
        }
        */
       for(const imagen of imagenes){
           imagen.classList.add("oculto");
           
       }
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
        const puntosBarco = barcos.indexOf(tipoBarco) + 1;// 1, 2, 3, 4
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
    if (puntosActuales >=10) {
        alert("¡Has ganado! El juego se reiniciará.");
        reiniciarJuego();
    }
};

// Función para reiniciar el juego
const reiniciarJuego = () => {
    document.getElementById("puntos").textContent = puntosIniciales;
    cargarImagenes(4, 4);
    ocultarImagenes();
};

// Función para alternar la imagen del policía
const ocultarPolicia = () => {
    const policia = document.getElementById("policia");
    const srcActual = policia.getAttribute("src");
    policia.setAttribute("src", srcActual === "./imagenes/mostrar.png" ? "./imagenes/ocultar.png" : "./imagenes/mostrar.png");
};


// Inicialización del juego
window.onload = () => {
    cargarImagenes(4, 4); // Cargar 4 barcos y 3 estrellas
    ocultarImagenes();

    document.getElementById("policia").addEventListener("click", ocultarPolicia);

    for (let i = 0; i < 12; i++) {
        document.getElementById(`imagen${i}`)
        .addEventListener("click", () => comprobarImagenes(`imagen${i}`));
    }
};