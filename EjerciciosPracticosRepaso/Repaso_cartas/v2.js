// juego de cartas
let numCartas = 7;
let baraja = ["corazones", "diamantes", "treboles", "picas"];
let baraja2 = ["uno", "dos", "tres", "cuatro"];
let elementos = ["fire", "water", "earth", "air"];
let elementos2 = ["fuego", "agua", "tierra", "aire"];
let torre = [];
// Función para crear cartas en los contenedores
function crearCartas() {
  // Recorrer cada "palo" de la baraja (en este caso uno, dos, tres, cuatro)
  baraja2.forEach((tipoFigura) => {
    // Obtener el div correspondiente al palo
    const divPalo = document.getElementById(tipoFigura);
    if (!divPalo) {
      console.error(`No se encontró el div con id "${tipoFigura}"`);
      return;
    }

    // Limpiar el contenido previo del div
    divPalo.innerHTML = "";

    // Crear las cartas para el palo actual
    for (let i = 1; i <= numCartas; i++) {
      let divElemento = document.createElement("div");
      divElemento.id = `${tipoFigura}-carta-${i}`;
      divElemento.classList.add("carta");
      
      const img = document.createElement("img");
      // Usar una URL de placeholder si no tienes imágenes locales
      img.src = `img/${tipoFigura}${i}.png`; // Ruta de la imagen
      // Alternativa si tienes las imágenes:
      // img.src = `img/${tipoFigura}.png`;
      img.alt = `${tipoFigura}${i}`;
      img.id = `${tipoFigura}${i}`;
      img.classList.add("carta-img");
      img.classList.add("ocultar");

      divElemento.appendChild(img);
      divPalo.appendChild(divElemento);
    }
  });
}

// Función para recoger todas las cartas y crear una baraja
function recogerCartas() {
  let cartas = document.querySelectorAll(".carta-img");
  // Reiniciar el array torre
  torre = [];
  
  cartas.forEach((carta) => {
    let id = carta.id;
    torre.push(id);
  });
  //console.log("Cartas recogidas:", torre);

  // Barajar las cartas
  let barajaBarajada = [...torre].sort(() => Math.random() - 0.5);
  console.log("Baraja barajada:", barajaBarajada);
  // Actualizar la carta visible en la baraja
  let imgBaraja = document.getElementById("barajaImg");
  if (imgBaraja && barajaBarajada.length > 0) {
    // Guardamos el ID de la carta actual como un atributo de datos
    imgBaraja.setAttribute("data-carta-id", barajaBarajada[0]);
    // También podemos actualizar la imagen si queremos mostrar la carta
     imgBaraja.src = `img/${barajaBarajada[0].split('-')[0]}.png`;
  }
}
// Función para seleccionar y mostrar una carta
function seleccionarCarta() {
  // Selecciona la imagen de la baraja
  let imgBaraja = document.getElementById("barajaImg");
  if (!imgBaraja) {
    console.error("No se encontró el elemento con id 'barajaImg'");
    return;
  }
  let idBaraja = imgBaraja.getAttribute("data-carta-id");
  if (!idBaraja) {
    console.error("No hay carta seleccionada actualmente");
    return;
  }
  // Buscar la carta correspondiente y mostrarla
  let cartaSeleccionada = document.getElementById(idBaraja);
  if (cartaSeleccionada) {
    cartaSeleccionada.classList.add("mostrar");
    cartaSeleccionada.classList.remove("ocultar");
    // Quitar la carta mostrada de la torre
    torre = torre.filter(id => id !== idBaraja);
    // Seleccionar la siguiente carta de la baraja
    if (torre.length > 0) {
      let siguienteCarta = torre[Math.floor(Math.random() * torre.length)];
      console.log("Siguiente carta:", siguienteCarta);
      imgBaraja.setAttribute("data-carta-id", siguienteCarta);
      // También podemos actualizar la imagen si queremos mostrar la carta
      imgBaraja.src = `img/${siguienteCarta.split('-')[0]}.png`;
     
    } else {
      console.log("No quedan más cartas en la baraja");
    }
  } else {
    console.error("No se encontró la carta con id:", idBaraja);
  }
}

// Función para mostrar todas las cartas
function mostrarCarta() {
  let secuencia = document.querySelectorAll(".carta-img"); 
  secuencia.forEach((carta) => {
    carta.classList.add("mostrar");
    carta.classList.remove("ocultar");
  });
}

// Función para desordenar cartas en cada fila
function desordenarCartas(event) {
  // Obtener el ID del contenedor de cartas que se ha clickado
  const filaId = event.currentTarget.id;
  const filaElemento = document.getElementById(filaId);
  
  if (!filaElemento) {
    console.error(`No se encontró el elemento con id '${filaId}'`);
    return;
  }
  
  // Recoger todas las cartas de esta fila
  let cartasEnFila = Array.from(filaElemento.querySelectorAll(".carta"));
  
  // Si no hay cartas, no hacer nada
  if (cartasEnFila.length === 0) {
    console.log(`No hay cartas en la fila ${filaId}`);
    return;
  }
  
  // Desordenar las cartas
  cartasEnFila.sort(() => Math.random() - 0.5);
  
  // Limpiar el contenedor
  filaElemento.innerHTML = "";
  
  // Reañadir las cartas en el nuevo orden
  cartasEnFila.forEach(carta => {
    filaElemento.appendChild(carta);
  });
}

// Inicializar todo cuando se carga la página
window.onload = function() {
  // Crear las cartas
  crearCartas();
  
  // Recoger y barajar las cartas
  recogerCartas();
   
  // Añadir los event listeners
  const btnMostrar = document.getElementById("mostrar");
  if (btnMostrar) {
    btnMostrar.addEventListener("click", mostrarCarta);
  } else {
    alert("No se encontró el elemento con id 'mostrar'");
  }
  
  const btnNext = document.getElementById("btnNext");
  if (btnNext) {
    btnNext.addEventListener("click", seleccionarCarta);
  } else {
  alert("No se encontró el elemento con id 'btnNext'");
  }
  
  // Añadir event listeners a los contenedores de las filas
  baraja2.forEach(id => {
    let elemento = document.getElementById(id);
    if (elemento) {
      elemento.addEventListener("click", desordenarCartas);
    } else {
      alert(`No se encontró el elemento con id '${id}'`);
    }
  });

  let btnReset = document.getElementById("btnReset");
  if (btnReset) {
    btnReset.addEventListener("click", function() {
      // Recoger y barajar las cartas nuevamente
      recogerCartas();
      // Limpiar todas las cartas mostradas
      let cartasMostradas = document.querySelectorAll(".carta-img.mostrar");
      cartasMostradas.forEach((carta) => {
        carta.classList.remove("mostrar");
        carta.classList.add("ocultar");
      });
    });
  } else {
    alert("No se encontró el elemento con id 'reset'");
  }
}