// juego de cartas

let numCartas = 7;
let baraja = ["corazones", "diamantes", "treboles", "picas"];
let baraja2 =["uno","dos","tres","cuatro"];
let elementos = ["fire","water","earth","air"];
let elementos2 = ["fuego","agua","tierra","aire"];
let torre = [];

// rellenar los div con las cartas
const divDiamantes = document.getElementById("diamantes");
const divTreboles = document.getElementById("treboles");
const divPicas = document.getElementById("picas");
const divBaraja = document.getElementById("baraja");
const divBarajaBarajada = document.getElementById("barajaBarajada");

function crearCartas(){
    // Recorrer cada palo de la baraja
  baraja2.forEach((tipoFigura) => {
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
      //img.src = `img/${tipoFigura}_${i}.png`; // Ruta de la imagen
      img.src = `img/${tipoFigura}.png`; // Ruta de la imagen
      img.alt = tipoFigura+i; // Texto alternativo
      img.id = tipoFigura+i; // ID único
      img.classList.add("carta-img"); // Clase opcional para estilos
      img.classList.add("ocultar"); // Clase opcional para estilos

      //divElemento.textContent =i; // Texto alternativo

      divElemento.appendChild(img); // Añadir la carta al contenedor del palo
      divPalo.appendChild(divElemento); // Añadir la carta al contenedor del palo
    
    }
  }
  );
}


function recogerCartas() {
  
  let cartas = document.querySelectorAll(".carta-img"); // Selecciona todas las cartas
    // recoger los id de las cartas
    let divBarajaBarajada = document.getElementById("barajaOriginal"); // Selecciona el contenedor de la baraja barajada
   torre = []; // Inicializa el array torre
    cartas.forEach((carta) => {
      // Recorre cada carta y añade su id al array torre
      let id = carta.id;
      torre.push(id);
    });
    console.log(torre); // Muestra el array torre en la consola

    // ahora vamos a barajar las cartas
    // barajar las cartas
    let barajaBarajada = torre.sort(() => Math.random() - 0.5); // Baraja las cartas de forma aleatoria
    
    //console.log(barajaBarajada); // Muestra la baraja barajada en la consola
    // recoger un id de la baraja y img.src
    let imgBaraja = document.getElementById("barajaImg"); // Selecciona la imagen de la baraja
    imgBaraja.src = `img/uno.png`; // Asigna la ruta de la imagen
    imgBaraja.alt = `${barajaBarajada[0]}`; // Asigna el texto alternativo
    imgBaraja.id = `${barajaBarajada[0]}`; // Asigna el id de la imagen
    imgBaraja.classList.add("carta"); // Clase opcional para estilos
    //imgBaraja.classList.toggle("oculta"); // Clase opcional para estilos
    divBarajaBarajada.appendChild(imgBaraja); // Añade la imagen al contenedor de la baraja barajada

    
  }

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

  function seleccionarCarta() {
    // Selecciona la imagen de la baraja
    let idElementos = document.querySelector(".barajaImg"); 
    if (!idElementos) {
        console.error("No se encontró el elemento con la clase 'barajaImg'");
        return;
    }

    let idBaraja = idElementos.id; // Obtiene el id de la baraja
    console.log("ID de la baraja:", idBaraja); // Muestra el id de la baraja en la consola

    // Selecciona todas las imágenes de la secuencia
    let secuencia = document.querySelectorAll(".carta-img"); 

    // Recorre las imágenes de la secuencia
    secuencia.forEach((carta) => {
        if (carta.id === idBaraja) {
            // Si el id coincide, agrega la clase 'mostrar' y elimina 'ocultar'
            carta.classList.add("mostrar");
            carta.classList.remove("ocultar");
        }
    });
}
function mostrarCarta() {
  let secuencia = document.querySelectorAll(".carta-img"); 
  secuencia.forEach((carta)=>{
    carta.classList.add("mostrar");
    carta.classList.toggle("ocultar");
  })
}
function desordenarCartas() {
  let filas = ["uno", "dos", "tres", "cuatro"];
  let torre = []; // Inicializa el array torre
  //let filaElementos = document.querySelectorAll("."); // Selecciona todas las cartas
  filas.forEach((fila) => {
    let filaElementos = document.getElementById(fila); // Selecciona el div correspondiente a la fila
    let lista = filaElementos.sort(() => Math.random() - 0.5); // Baraja las cartas de forma aleatoria
    lista.forEach((carta) => {
        let id = carta.id;
        torre.push(id);
    });
    console.log(torre); // Muestra el array torre en la consola

  });
}

window.onload = function() {
    crearCartas(); // Crear las cartas al cargar la página
    recogerCartas(); // Recoger las cartas al cargar la página
   
    document.getElementById("mostrar").addEventListener("click", mostrarCarta ); // Añadir evento al botón "Mostrar"
    document.getElementById("btnNext").addEventListener("click",seleccionarCarta );
    for(let i= 0; i<baraja2.length; i++){
        let id = baraja2[i];
        let img = document.getElementById(id);
        img.addEventListener("click", desordenarCartas); // Añadir evento al botón "Recoger"
    }
}