const palabras = ["javascript", "programacion", "html", "ahorcado", "desarrollo"];
const palabraSeleccionada = seleccionarPalabra(palabras);
let palabraOculta = inicializarPalabraOculta(palabraSeleccionada.length);
let intentos = 6;

const elementos = {
  palabraOcultaElemento: document.getElementById("palabra-oculta"),
  entradaLetra: document.getElementById("entrada-letra"),
  botonComprobar: document.getElementById("boton-comprobar"),
  resultadoElemento: document.getElementById("resultado"),
  lienzo: document.getElementById("ahorcado")
};

const contexto = elementos.lienzo.getContext("2d");

actualizarVista(elementos.palabraOcultaElemento, palabraOculta);

// Seleccionar palabra aleatoria
function seleccionarPalabra(palabras) {
  return palabras[Math.floor(Math.random() * palabras.length)];
}

// Inicializar palabra oculta
function inicializarPalabraOculta(longitud) {
  return "_".repeat(longitud).split("");
}

// Actualizar la vista del juego
function actualizarVista(elemento, contenido) {
  elemento.textContent = contenido.join(" ");
}

// Procesar intento del jugador
function procesarIntento(letra) {
  if (letra && palabraSeleccionada.includes(letra)) {
    palabraOculta = palabraSeleccionada.split("").map((caracter, i) =>
      caracter === letra ? letra : palabraOculta[i]
    );
  } else {
    intentos--;
    dibujarAhorcado(intentos, contexto);
  }
  return palabraOculta;
}

// Verificar el estado del juego
function verificarEstado(palabraOculta, intentos, palabraSeleccionada) {
  if (!palabraOculta.includes("_")) {
    return { mensaje: "¡Felicidades, ganaste!", juegoTerminado: true };
  } else if (intentos === 0) {
    return { mensaje: `¡Perdiste! La palabra era: ${palabraSeleccionada}`, juegoTerminado: true };
  }
  return { mensaje: "", juegoTerminado: false };
}

// Dibujar partes del ahorcado
function dibujarAhorcado(intentos, contexto) {
  contexto.lineWidth = 2;
  const dibujos = [
    () => { contexto.moveTo(50, 250); contexto.lineTo(150, 250); },
    () => { contexto.moveTo(100, 250); contexto.lineTo(100, 50); },
    () => { contexto.moveTo(100, 50); contexto.lineTo(150, 50); },
    () => { contexto.moveTo(150, 50); contexto.lineTo(150, 70); },
    () => { contexto.arc(150, 90, 20, 0, Math.PI * 2); contexto.stroke(); return; },
    () => { contexto.moveTo(150, 110); contexto.lineTo(150, 200); }
  ];
  contexto.beginPath();
  dibujos[6 - intentos]?.(); // Selecciona el dibujo según los intentos
  contexto.stroke();
}

// Evento para el botón "Comprobar"

elementos.botonComprobar.addEventListener("click", () => {
  const letra = elementos.entradaLetra.value.toLowerCase();
  elementos.entradaLetra.value = "";

  palabraOculta = procesarIntento(letra);
  actualizarVista(elementos.palabraOcultaElemento, palabraOculta);

  const estado = verificarEstado(palabraOculta, intentos, palabraSeleccionada);
  if (estado.juegoTerminado) {
    elementos.resultadoElemento.textContent = estado.mensaje;
    elementos.botonComprobar.disabled = true;
  }
});