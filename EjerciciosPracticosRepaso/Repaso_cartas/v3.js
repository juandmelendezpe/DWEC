// Clase Carta
class Carta {
    constructor(numero, palo) {
        this.numero = numero;
        this.palo = palo;
    }
    // Método para crear el elemento HTML de la carta
    crearElemento() {
        const cartaDiv = document.createElement("div");
        cartaDiv.classList.add("carta");
        cartaDiv.dataset.palo = this.palo;
        cartaDiv.dataset.numero = this.numero;

        // Número en la esquina superior izquierda
        const numeroArriba = document.createElement("div");
        numeroArriba.classList.add("numero", "arriba");
        numeroArriba.textContent = this.numero;

        // Figura central
        const figura = document.createElement("div");
        figura.classList.add("figura");
        figura.textContent = this.palo;

        // Número en la esquina inferior derecha
        const numeroAbajo = document.createElement("div");
        numeroAbajo.classList.add("numero", "abajo");
        numeroAbajo.textContent = this.numero;

        // Añadir los elementos a la carta
        cartaDiv.appendChild(numeroArriba);
        cartaDiv.appendChild(figura);
        cartaDiv.appendChild(numeroAbajo);

        return cartaDiv;
    }
}

// Clase Baraja
class Baraja {
    constructor() {
        this.palos = ["oros", "copas", "espadas", "bastos"];
        this.cartas = [];
        this.generarCartas();
    }

    // Generar las cartas de la baraja
    generarCartas() {
        this.palos.forEach((palo) => {
            for (let i = 1; i <= 10; i++) {
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
                return a.numero - b.numero;
            }
            return this.palos.indexOf(a.palo) - this.palos.indexOf(b.palo);
        });
    }
}

// Inicialización
const baraja = new Baraja();
const contenedorCartas = document.getElementById("container-cartas");
const mazo = document.getElementById("barajaImg");
let cartasMostradas = [];
let cartasOrdenadas = true;

// Evento para mostrar cartas al hacer clic en el mazo
mazo.addEventListener("click", () => {
    if (baraja.cartas.length > 0) {
        const carta = baraja.cartas.shift(); // Sacar la primera carta del mazo
        const cartaElemento = carta.crearElemento();
        contenedorCartas.appendChild(cartaElemento);
        cartasMostradas.push(carta);
    } else {
        alert("No quedan más cartas en el mazo.");
    }
});

// Evento para ordenar o desordenar las cartas al hacer clic en una carta descubierta
contenedorCartas.addEventListener("click", () => {
    contenedorCartas.innerHTML = ""; // Limpiar el contenedor
    if (cartasOrdenadas) {
        baraja.mezclar();
        cartasMostradas.forEach((carta) => {
            const cartaElemento = carta.crearElemento();
            contenedorCartas.appendChild(cartaElemento);
        });
        cartasOrdenadas = false;
    } else {
        baraja.ordenar();
        cartasMostradas.forEach((carta) => {
            const cartaElemento = carta.crearElemento();
            contenedorCartas.appendChild(cartaElemento);
        });
        cartasOrdenadas = true;
    }
});