// juego de cartas

let numCartas = 7;
let baraja = ["corazones", "diamantes", "treboles", "picas"];

// rellenar los div con las cartas
const divDiamantes = document.getElementById("diamantes");
const divTreboles = document.getElementById("treboles");
const divPicas = document.getElementById("picas");
const divBaraja = document.getElementById("baraja");
const divBarajaBarajada = document.getElementById("barajaBarajada");

function crearCartas(){
    // Recorrer cada palo de la baraja
  baraja.forEach((tipoFigura) => {
    // Obtener el div correspondiente al palo
    const divPalo = document.getElementById(tipoFigura);
    if (!divPalo) {
      console.error(`No se encontró el div con id "${tipoFigura}"`);
      return;
    }

    // Limpiar el contenido previo del div
    tipoFigura.textContent = "";

    // Crear las cartas para el palo actual
    for (let i = 1; i <= numCartas; i++) {
        let divElemento = document.createElement("div");
        divElemento.id = tipoFigura+i; // Asignar el id correspondiente al palo
        divElemento.classList.add("carta"); // Clase opcional para estilos

      const img = document.createElement("img");
      img.src = `img/${tipoFigura}_${i}.png`; // Ruta de la imagen
      img.alt = `${tipoFigura}_${i}`; // Texto alternativo
      img.id = `${tipoFigura}_${i}`; // ID único

      divElemento.textContent =i; // Texto alternativo

      divElemento.appendChild(img); // Añadir la carta al contenedor del palo
      divPalo.appendChild(divElemento); // Añadir la carta al contenedor del palo
    
    }
  });

  function crearCartas2() {
    const numCartas = 10; // Número de cartas por cada palo
    const baraja = ["corazones", "diamantes", "treboles", "picas"]; // Palos de la baraja
    const figura1 = document.getElementById("figuras1"); // Contenedor principal
  
    figura1.textContent = ""; // Limpiar el contenido previo
  
    // Recorrer cada palo de la baraja
    baraja.forEach((palo) => {
      // Crear un contenedor para cada palo
      const divPalo = document.createElement("div");
      divPalo.id = palo; // Asignar el id correspondiente al palo
      divPalo.classList.add("palo"); // Clase opcional para estilos
  
      // Crear las cartas para el palo actual
      for (let i = 1; i <= numCartas; i++) {
        const img = document.createElement("img");
        img.src = `img/${palo}_${i}.png`; // Ruta de la imagen
        img.alt = `${palo} ${i}`; // Texto alternativo
        img.id = `${palo}_${i}`; // ID único
        img.classList.add("carta"); // Clase opcional para estilos
  
        divPalo.appendChild(img); // Añadir la carta al contenedor del palo
      }
  
      figura1.appendChild(divPalo); // Añadir el contenedor del palo al contenedor principal
    });
  }
}
function alertarBaraja() {
    alert("Baraja de cartas");
    
  }

window.onload = function() {
    crearCartas();
    document.getElementById("barajaImg").addEventListener("click",alertarBaraja);
}