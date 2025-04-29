const palabras = ["javascript", "programacion", "html", "ahorcado", "desarrollo"];
const palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
let palabraOculta = "_".repeat(palabraSeleccionada.length).split("");
let intentos = 6;

const palabraOcultaElemento = document.getElementById("palabra-oculta");
const entradaLetra = document.getElementById("entrada-letra");
const botonComprobar = document.getElementById("boton-comprobar");
const resultadoElemento = document.getElementById("resultado");
const lienzo = document.getElementById("ahorcado");
const contexto = lienzo.getContext("2d");

palabraOcultaElemento.textContent = palabraOculta.join(" ");

// Dibuja partes del ahorcado
function dibujarAhorcado() {
  contexto.lineWidth = 2;
  if (intentos === 5) { 
    contexto.moveTo(50, 250); contexto.lineTo(150, 250); 
  }
  else if (
    intentos === 4) { contexto.moveTo(100, 250); contexto.lineTo(100, 50); 
    }
  else if (
    intentos === 3) { contexto.moveTo(100, 50); contexto.lineTo(150, 50); 
    }
  else if (
    intentos === 2) { contexto.moveTo(150, 50); contexto.lineTo(150, 70); 
    }
  else if (
    intentos === 1) { contexto.arc(150, 90, 20, 0, Math.PI * 2); contexto.stroke(); 
     return; }
  else if (
    intentos === 0) { contexto.moveTo(150, 110); contexto.lineTo(150, 200);
     }
  contexto.stroke();
}

// Comprobar letra
botonComprobar.addEventListener("click", () => {
  const letra = entradaLetra.value.toLowerCase();
  entradaLetra.value = "";

  if (letra && palabraSeleccionada.includes(letra)) {
    palabraSeleccionada.split("").forEach((caracter, i) => {
      if (caracter === letra) palabraOculta[i] = caracter;
    });
    palabraOcultaElemento.textContent = palabraOculta.join(" ");
  } else {
    intentos--;
    dibujarAhorcado();
  }

  if (!palabraOculta.includes("_")) {
    resultadoElemento.textContent = "¡Felicidades, ganaste!";
    botonComprobar.disabled = true;
  } else if (intentos === 0) {
    resultadoElemento.textContent = `¡Perdiste! La palabra era: ${palabraSeleccionada}`;
    botonComprobar.disabled = true;
  }
});