// Clase Carta
let numCartas = 7; // Número de cartas por palo
class Carta {
    constructor(numero, palo) {
        this.numero = numero;
        this.palo = palo;
        this.id = `${palo}${numero}`;
        this.visible = false;
    }
    // Método para crear la carta en el DOM
    crearElemento() {
        const divElemento = document.createElement("div");
        divElemento.id = `${this.palo}-carta-${this.numero}`;
        divElemento.classList.add("carta");
        divElemento.classList.add("fondo"); // Añadir clase para el estilo
        
        const img = document.createElement("img");
        img.src = `img/${this.palo}${this.numero}.png`; // Ruta de la imagen
        img.alt = `${this.palo}${this.numero}`;
        img.id = this.id;
        img.classList.add("carta-img");
        
        // Aplicar clase según si la carta está visible o no
        if (this.visible) {
            img.classList.add("mostrar");
        } else {
            img.classList.add("ocultar");
        }

        divElemento.appendChild(img);
        return divElemento;
    }

    // Mostrar carta
    mostrar() {
        this.visible = true;
        const imgElement = document.getElementById(this.id);
        if (imgElement) {
            imgElement.classList.add("mostrar");
            imgElement.classList.remove("ocultar");
        }
    }

    // Ocultar carta
    ocultar() {
        this.visible = false;
        const imgElement = document.getElementById(this.id);
        if (imgElement) {
            imgElement.classList.add("ocultar");
            imgElement.classList.remove("mostrar");
        }
    }
}

// Clase Baraja
class Baraja {
    constructor() {
        this.palos = ["uno", "dos", "tres", "cuatro"];
        this.elementos = ["fuego", "agua", "tierra", "aire"];
        this.cartas = [];
        this.cartaActual = null;
        this.generarCartas();
    }

    // Generar las cartas de la baraja
    generarCartas() {
        this.palos.forEach((palo) => {
            for (let i = 1; i <= numCartas; i++) {
                this.cartas.push(new Carta(i, palo));
            }
        });
    }

    // Mezclar las cartas
    mezclar() {
        this.cartas.sort(() => Math.random() - 0.5);
    }

    // Ordenar las cartas
    ordenar() {
        this.cartas.sort((a, b) => {
            if (a.palo === b.palo) {
                return a.numero - b.numero; // Ordenar por número
            }
            return this.palos.indexOf(a.palo) - this.palos.indexOf(b.palo); // Ordenar por palo
        });
    }

    // Seleccionar una carta al azar
    seleccionarCartaAleatoria() {
        if (this.cartas.length === 0) return null;
        
        const indiceAleatorio = Math.floor(Math.random() * this.cartas.length);
        this.cartaActual = this.cartas[indiceAleatorio];
        return this.cartaActual;
    }

    // Encontrar una carta específica por su ID
    encontrarCartaPorId(id) {
        return this.cartas.find(carta => carta.id === id);
    }

    // Eliminar carta de la baraja
    quitarCarta(carta) {
        const index = this.cartas.findIndex(c => c.id === carta.id);
        if (index !== -1) {
            this.cartas.splice(index, 1);
        }
    }

    // Obtener la primera carta (para mostrar en el mazo)
    obtenerPrimeraCarta() {
        return this.cartas.length > 0 ? this.cartas[0] : null;
    }
}

// Clase Juego para manejar la lógica del juego
class Juego {
    constructor() {
        this.baraja = new Baraja(); // Crear una nueva baraja
        this.contenedores = {};
        this.inicializar();
    }

    inicializar() {
        // Crear los contenedores para cada palo
        this.baraja.palos.forEach(palo => {
            const divPalo = document.getElementById(palo);
            if (divPalo) {
                this.contenedores[palo] = divPalo; // Guardar referencia al contenedor
                // Limpiar contenido previo
                divPalo.innerHTML = "";
            } else {
                console.error(`No se encontró el div con id "${palo}"`);
            }
        });


        // Distribuir las cartas en sus contenedores
        this.distribuirCartas();

        // Configurar event listeners
        this.configurarEventListeners();

        // Actualizar la imagen de la baraja
        this.actualizarImagenBaraja();

    }

    distribuirCartas() {
        // Filtrar y ordenar cartas por palo
        this.baraja.palos.forEach(palo => {
            const cartasPalo = this.baraja.cartas.filter(carta => carta.palo === palo); // 
            ///console.log(`Cartas de ${palo}:`, cartasPalo); // Mostrar las cartas de cada palo en la consola
            
            // Añadir cada carta al contenedor correspondiente
            cartasPalo.forEach(carta => {
                if (this.contenedores[palo]) {
                    const elementoCarta = carta.crearElemento();
                  //  elementoCarta.classList.remove("fondo") // Añadir clase para el estilo
                    this.contenedores[palo].appendChild(elementoCarta); // Añadir la carta al contenedor
                
                }
            });
        });
    }

    configurarEventListeners() {
        // Event listener para el botón mostrar
        const btnMostrar = document.getElementById("mostrar");
        if (btnMostrar) {
            btnMostrar.addEventListener("click", () => this.mostrarTodasCartas());
        } else {
            console.error("No se encontró el elemento con id 'mostrar'");
        }
        
        // Event listener para el botón de la baraja (seleccionar carta)
        const barajaImg = document.getElementById("barajaImg");
        if (barajaImg) {
            barajaImg.addEventListener("click", () => this.seleccionarCartaDelMazo());
        } else {
            console.error("No se encontró el elemento con id 'barajaImg'");
        }
        
        // Event listeners para desordenar cartas al hacer clic en los contenedores
        this.baraja.palos.forEach(palo => {
            if (this.contenedores[palo]) {
                this.contenedores[palo].addEventListener("click", (event) => this.desordenarCartas(event));
            }
        });
    }

    mostrarTodasCartas() {
        this.baraja.cartas.forEach(carta => {
            carta.mostrar();
        });
    }

    // Método modificado para seleccionar la carta actual del mazo
    seleccionarCartaDelMazo() {
       const imgBaraja = document.getElementById("barajaImg");
        if (!imgBaraja) {
            console.error("No se encontró el elemento con id 'barajaImg'");
            return;
        }
        
        // Obtener el ID de la carta desde el atributo data-carta-id
        const cartaId = imgBaraja.getAttribute("data-carta-id");
        if (!cartaId) {
            console.error("No hay carta seleccionada actualmente");
            return;
        }

        
        // Buscar la carta por su ID
        const carta = this.baraja.encontrarCartaPorId(cartaId);
        if (carta) {
            // Mostrar la carta
            carta.mostrar();
            
            // Quitar la carta del mazo
            this.baraja.quitarCarta(carta);
            
            // Actualizar la imagen de la baraja con la siguiente carta
            this.actualizarImagenBaraja();
        } else {
            console.error(`No se encontró la carta con id: ${cartaId}`);
        }
    }

    desordenarCartas(event) {
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

    actualizarImagenBaraja() {
        const imgBaraja = document.getElementById("barajaImg");
        if (!imgBaraja) {
            console.error("No se encontró el elemento con id 'barajaImg'");
            return;
        }

       // const primeraCarta = this.baraja.obtenerPrimeraCarta();
        const primeraCarta = this.baraja.seleccionarCartaAleatoria(); // Seleccionar una carta aleatoria para mostrar en la baraja
        if (primeraCarta) {
            // Asignar el ID de la primera carta al atributo data-carta-id
            imgBaraja.setAttribute("data-carta-id", primeraCarta.id);
            imgBaraja.src = `img/${primeraCarta.palo}${primeraCarta.numero}.png`;
            imgBaraja.alt = `${primeraCarta.palo}`;
        } else {
            imgBaraja.src = "https://pbs.twimg.com/profile_images/1475075122704830464/kdodbqYW_400x400.jpg"; // Imagen para baraja vacía
            imgBaraja.removeAttribute("data-carta-id");
            imgBaraja.alt = "Baraja_vacía";
            alert("No quedan más cartas en la baraja");
        }
    }
    
    recogerYBarajarCartas() {
        // Crear una nueva baraja y mezclarla
        this.baraja = new Baraja();
        this.baraja.mezclar();
        
        // Reiniciar los contenedores
        this.inicializar();
    }
}

function crearContenedores() {
    const contenedorPrincipal = document.getElementById("container-cartas");
    if (!contenedorPrincipal) {
        alert("No se encontró el contenedor principal con id 'container-cartas'");
        return;
    }

    ["uno", "dos", "tres", "cuatro"].forEach(palo => {
        const divPalo = document.createElement("div");
        divPalo.classList.add("cartas");
        divPalo.id = `${palo}`;
        contenedorPrincipal.appendChild(divPalo);
    });
}
function reset(){
    const juego = new Juego();
    juego.recogerYBarajarCartas(); // Recoger y barajar cartas al hacer clic en el botón "reset"
    
}

// Inicializar el juego cuando se carga la página
window.onload = function() {
    crearContenedores();
   const juego = new Juego();
  
    
}