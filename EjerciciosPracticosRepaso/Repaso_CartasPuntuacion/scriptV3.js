// Clase para gestionar una carta
class Carta {
    constructor(nombre, fuerza, defensa, habilidad, id = Date.now()) {
        this.nombre = nombre;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.habilidad = habilidad;
        this.id = id;
    }
}

// Clase para gestionar un jugador
class Jugador {
    constructor(nombre = '') {
        this.nombre = nombre;
        this.cartas = [];
        this.cartaSeleccionada = null;
        this.estadisticaSeleccionada = null;
        this.cartasUsadas = [];
    }

    crearCarta(nombre, fuerza, defensa, habilidad) {
        const carta = new Carta(nombre, fuerza, defensa, habilidad);
        this.cartas.push(carta);
        return carta;
    }

    seleccionarCarta(idCarta) {
        this.cartaSeleccionada = this.cartas.find(carta => carta.id === idCarta);
        return this.cartaSeleccionada;
    }

    marcarCartaComoUsada(idCarta) {
        if (!this.cartasUsadas.includes(idCarta)) {
            this.cartasUsadas.push(idCarta);
        }
    }

    obtenerCartasRestantes() {
        return this.cartas.length - this.cartasUsadas.length;
    }

    reiniciar() {
        this.cartas = [];
        this.cartaSeleccionada = null;
        this.estadisticaSeleccionada = null;
        this.cartasUsadas = [];
    }
}

// Clase principal del juego
class JuegoCartas {
    constructor() {
        this.estadoJuego = {
            faseActual: 'configuracion', // configuracion, crearCartas, batalla
            jugador1: new Jugador(),
            jugador2: new Jugador(),
            jugadorActual: 1,
            jugadorAtacante: 1,
            jugadorDefensor: 2,
            turno: 1,
            turnosTotales: 1,
        };

        this.elementos = {
            configuracionJugadores: document.getElementById('playerSetup'),
            tableroJuego: document.getElementById('gameBoard'),
            cabeceraJugador1: document.getElementById('player1Header'),
            cabeceraJugador2: document.getElementById('player2Header'),
            creacionCartasJugador1: document.getElementById('player1CardCreation'),
            creacionCartasJugador2: document.getElementById('player2CardCreation'),
            cartasJugador1: document.getElementById('player1Cards'),
            cartasJugador2: document.getElementById('player2Cards'),
            mostrarCartasJ1: document.getElementById('p1ShowCards'),
            mostrarCartasJ2: document.getElementById('p2ShowCards'),
            mostrarTodasCartas: document.getElementById('showAllCards'),
            seccionBatalla: document.getElementById('battleSection'),
            turnoActual: document.getElementById('currentTurn'),
            opcionesAtaque: document.getElementById('attackOptions'),
            batallaJugador1: document.getElementById('player1Battle'),
            batallaJugador2: document.getElementById('player2Battle'),
            resultadoBatalla: document.getElementById('battleResult'),
            registroJuego: document.getElementById('gameLog')
        };

        this.inicializarEventos();
    }

    inicializarEventos() {
        // Evento para iniciar el juego
        document.getElementById('startGame').addEventListener('click', () => this.iniciarJuego());

        // Eventos para crear cartas
        document.getElementById('p1CreateCard').addEventListener('click', () => this.crearCarta(1));
        document.getElementById('p2CreateCard').addEventListener('click', () => this.crearCarta(2));

        // Validación de puntos para el jugador 1
        ['p1CardFuerza', 'p1CardDefensa', 'p1CardHabilidad'].forEach(id => {
            document.getElementById(id).addEventListener('input', () => this.validarPuntos(1));
        });

        // Validación de puntos para el jugador 2
        ['p2CardFuerza', 'p2CardDefensa', 'p2CardHabilidad'].forEach(id => {
            document.getElementById(id).addEventListener('input', () => this.validarPuntos(2));
        });

        // Mostrar cartas
        this.elementos.mostrarCartasJ1.addEventListener('click', () => this.alternarMostrarCartas(1));
        this.elementos.mostrarCartasJ2.addEventListener('click', () => this.alternarMostrarCartas(2));

        // Opciones de ataque
        document.getElementById('attackFuerza').addEventListener('click', () => this.seleccionarTipoAtaque('fuerza'));
        document.getElementById('attackDefensa').addEventListener('click', () => this.seleccionarTipoAtaque('defensa'));
        document.getElementById('attackHabilidad').addEventListener('click', () => this.seleccionarTipoAtaque('habilidad'));
    }

    iniciarJuego() {
        const nombreJugador1 = document.getElementById('player1Name').value.trim() || 'Jugador 1';
        const nombreJugador2 = document.getElementById('player2Name').value.trim() || 'Jugador 2';
        
        this.estadoJuego.jugador1.nombre = nombreJugador1;
        this.estadoJuego.jugador2.nombre = nombreJugador2;
        
        this.elementos.cabeceraJugador1.textContent = nombreJugador1;
        this.elementos.cabeceraJugador2.textContent = nombreJugador2;
        
        this.elementos.configuracionJugadores.classList.add('hidden');
        this.elementos.tableroJuego.classList.remove('hidden');
        
        this.estadoJuego.faseActual = 'crearCartas';
        
        this.registrarMensaje(`¡El juego ha comenzado! ${nombreJugador1} creará sus cartas primero.`);
    }

    validarPuntos(numeroJugador) {
        const prefijo = `p${numeroJugador}Card`;
        const fuerza = parseInt(document.getElementById(`${prefijo}Fuerza`).value) || 0;
        const defensa = parseInt(document.getElementById(`${prefijo}Defensa`).value) || 0;
        const habilidad = parseInt(document.getElementById(`${prefijo}Habilidad`).value) || 0;
        
        const total = fuerza + defensa + habilidad;
        const restantes = 30 - total;
        
        document.getElementById(`p${numeroJugador}PointsRemaining`).textContent = `Puntos disponibles: ${restantes}`;
        
        if (restantes < 0) {
            document.getElementById(`p${numeroJugador}PointsRemaining`).style.color = 'red';
            document.getElementById(`p${numeroJugador}CreateCard`).disabled = true;
        } else {
            document.getElementById(`p${numeroJugador}PointsRemaining`).style.color = 'black'; 
            document.getElementById(`p${numeroJugador}CreateCard`).disabled = false;
        }
    }

    crearCarta(numeroJugador) {
        const prefijo = `p${numeroJugador}Card`;
        const jugador = this.estadoJuego[`jugador${numeroJugador}`];
        const nombre = document.getElementById(`${prefijo}Name`).value.trim() || `Carta ${numeroJugador}-${jugador.cartas.length + 1}`;
        const fuerza = parseInt(document.getElementById(`${prefijo}Fuerza`).value) || 0;
        const defensa = parseInt(document.getElementById(`${prefijo}Defensa`).value) || 0;
        const habilidad = parseInt(document.getElementById(`${prefijo}Habilidad`).value) || 0;
        
        // Validar que la suma de puntos no exceda 30
        if (fuerza + defensa + habilidad > 30) {
            alert('La suma de los valores no puede superar 30.');
            return;
        }
        
        // Crear la carta
        const carta = jugador.crearCarta(nombre, fuerza, defensa, habilidad);
        
        // Actualizar la interfaz
        this.renderizarCartas(numeroJugador);
        
        // Resetear los campos del formulario
        document.getElementById(`${prefijo}Name`).value = '';
        document.getElementById(`${prefijo}Fuerza`).value = '';
        document.getElementById(`${prefijo}Defensa`).value = '';
        document.getElementById(`${prefijo}Habilidad`).value = '';
        document.getElementById(`p${numeroJugador}PointsRemaining`).textContent = 'Puntos disponibles: 30';
        
        this.registrarMensaje(`${jugador.nombre} ha creado una nueva carta: ${nombre}`);
        
        // Si el jugador ha creado 3 cartas, pasar al siguiente jugador o fase
        if (jugador.cartas.length === 1) {
            this.elementos[`creacionCartasJugador${numeroJugador}`].classList.add('hidden');
            this.elementos[`mostrarCartasJ${numeroJugador}`].classList.remove('hidden');
            
            if (numeroJugador === 1) {
                // El jugador 1 ha terminado, ahora le toca al jugador 2
                this.elementos.creacionCartasJugador2.classList.remove('hidden');
                this.elementos.cartasJugador1.classList.add('hidden');
                this.registrarMensaje(`${this.estadoJuego.jugador1.nombre} ha creado sus 3 cartas. Ahora es el turno de ${this.estadoJuego.jugador2.nombre}.`);
            } else {
                // Ambos jugadores han terminado de crear cartas, comenzar la fase de batalla
                this.elementos.cartasJugador2.classList.add('hidden');
                this.elementos.seccionBatalla.classList.remove('hidden');
                this.estadoJuego.faseActual = 'batalla';
                this.iniciarFaseBatalla();
            }
        }
    }

    renderizarCartas(numeroJugador) {
        const contenedorCartas = this.elementos[`cartasJugador${numeroJugador}`];
        const jugador = this.estadoJuego[`jugador${numeroJugador}`];
        contenedorCartas.innerHTML = '';
        
        jugador.cartas.forEach(carta => {
            const elementoCarta = document.createElement('div');
            elementoCarta.classList.add('card');
            elementoCarta.dataset.cardId = carta.id;
            
            // Si la carta ya ha sido usada, añadir la clase correspondiente
            if (jugador.cartasUsadas.includes(carta.id)) {
                elementoCarta.classList.add('used');
            }
            
            elementoCarta.innerHTML = `
                <div><strong>Nombre:</strong> ${carta.nombre}</div>
                <div class="stats"><strong>Fuerza:</strong> ${carta.fuerza}</div>
                <div class="stats"><strong>Defensa:</strong> ${carta.defensa}</div>
                <div class="stats"><strong>Habilidad:</strong> ${carta.habilidad}</div>
            `;
            
            // Añadir evento click solo si estamos en fase de batalla y es el turno del jugador
            if (this.estadoJuego.faseActual === 'batalla' && 
                this.estadoJuego.jugadorActual === numeroJugador &&
                !jugador.cartasUsadas.includes(carta.id)) {
                elementoCarta.addEventListener('click', () => this.seleccionarCarta(numeroJugador, carta.id));
            }
            
            contenedorCartas.appendChild(elementoCarta);
        });
    }

    alternarMostrarCartas(numeroJugador) {
        const contenedorCartas = this.elementos[`cartasJugador${numeroJugador}`];
        const botonMostrar = this.elementos[`mostrarCartasJ${numeroJugador}`];
        
        if (contenedorCartas.classList.contains('hidden')) {
            contenedorCartas.classList.remove('hidden');
            botonMostrar.textContent = 'Ocultar Cartas';
        } else {
            contenedorCartas.classList.add('hidden');
            botonMostrar.textContent = 'Mostrar Cartas';
        }
    }

    iniciarFaseBatalla() {
        this.estadoJuego.jugadorActual = this.estadoJuego.jugadorAtacante;
        this.actualizarIndicadorTurno();
        
        if (this.estadoJuego.jugadorAtacante === 1) {
            this.elementos.mostrarCartasJ1.classList.remove('hidden');
            this.elementos.mostrarCartasJ2.classList.add('hidden');
            this.elementos.cartasJugador1.classList.remove('hidden');
            this.elementos.cartasJugador2.classList.add('hidden');
        } else {
            this.elementos.mostrarCartasJ1.classList.add('hidden');
            this.elementos.mostrarCartasJ2.classList.remove('hidden');
            this.elementos.cartasJugador1.classList.add('hidden');
            this.elementos.cartasJugador2.classList.remove('hidden');
        }
        
        // Mostrar las opciones de ataque solo al jugador atacante
        this.elementos.opcionesAtaque.style.display = 
            this.estadoJuego.jugadorActual === this.estadoJuego.jugadorAtacante ? 'block' : 'none';
        
        this.renderizarCartas(1);
        this.renderizarCartas(2);
    }

    actualizarIndicadorTurno() {
        const nombreJugador = this.estadoJuego[`jugador${this.estadoJuego.jugadorActual}`].nombre;
        const accion = this.estadoJuego.jugadorActual === this.estadoJuego.jugadorAtacante ? 'ataca' : 'defiende';
        this.elementos.turnoActual.textContent = 
            `Turno ${this.estadoJuego.turno} de ${this.estadoJuego.turnosTotales} - ${nombreJugador} ${accion}`;
    }

    seleccionarTipoAtaque(tipo) {
        const jugadorAtacante = this.estadoJuego[`jugador${this.estadoJuego.jugadorAtacante}`];
        const jugadorDefensor = this.estadoJuego[`jugador${this.estadoJuego.jugadorDefensor}`];
        
        jugadorAtacante.estadisticaSeleccionada = tipo;
        this.elementos.opcionesAtaque.style.display = 'none';
        
        let tipoDefensa;
        switch (tipo) {
            case 'fuerza':
                tipoDefensa = 'defensa';
                break;
            case 'defensa':
                tipoDefensa = 'fuerza';
                break;
            case 'habilidad':
                tipoDefensa = 'habilidad';
                break;
        }
        
        jugadorDefensor.estadisticaSeleccionada = tipoDefensa;
        
        this.registrarMensaje(`${jugadorAtacante.nombre} ha decidido atacar con ${tipo.toUpperCase()}`);
        this.registrarMensaje(`${jugadorDefensor.nombre} deberá defender con ${tipoDefensa.toUpperCase()}`);
        
        // Cambiar al jugador defensor
        this.estadoJuego.jugadorActual = this.estadoJuego.jugadorDefensor;
        this.actualizarIndicadorTurno();
        
        if (this.estadoJuego.jugadorActual === 1) {
            this.elementos.mostrarCartasJ1.classList.remove('hidden');
            this.elementos.mostrarCartasJ2.classList.add('hidden');
            this.elementos.cartasJugador1.classList.remove('hidden');
            this.elementos.cartasJugador2.classList.add('hidden');
        } else {
            this.elementos.mostrarCartasJ1.classList.add('hidden');
            this.elementos.mostrarCartasJ2.classList.remove('hidden');
            this.elementos.cartasJugador1.classList.add('hidden');
            this.elementos.cartasJugador2.classList.remove('hidden');
        }
        
        this.renderizarCartas(1);
        this.renderizarCartas(2);
    }

    seleccionarCarta(numeroJugador, idCarta) {
        const cartas = document.querySelectorAll(`#player${numeroJugador}Cards .card`);
        cartas.forEach(carta => carta.classList.remove('selected'));
        
        // Encontrar y seleccionar la carta
        const elementoCarta = document.querySelector(`#player${numeroJugador}Cards .card[data-card-id="${idCarta}"]`);
        if (elementoCarta) {
            elementoCarta.classList.add('selected');
        }
        
        // Actualizar el estado del juego
        const jugador = this.estadoJuego[`jugador${numeroJugador}`];
        const carta = jugador.seleccionarCarta(idCarta);
        
        this.registrarMensaje(`${jugador.nombre} ha seleccionado la carta: ${carta.nombre}`);
        
        // Si ambos jugadores han seleccionado una carta, resolver la batalla
        if (this.estadoJuego.jugador1.cartaSeleccionada && this.estadoJuego.jugador2.cartaSeleccionada) {
            this.resolverBatalla();
        }
    }

    resolverBatalla() {
        const jugador1 = this.estadoJuego.jugador1;
        const jugador2 = this.estadoJuego.jugador2;
        const carta1 = jugador1.cartaSeleccionada;
        const carta2 = jugador2.cartaSeleccionada;
        const stat1 = jugador1.estadisticaSeleccionada;
        const stat2 = jugador2.estadisticaSeleccionada;
        
        // Mostrar las cartas en el área de batalla
        this.elementos.batallaJugador1.innerHTML = `
            <div><strong>${carta1.nombre}</strong></div>
            <div><strong>${stat1.toUpperCase()}:</strong> ${carta1[stat1]}</div>
        `;
        
        this.elementos.batallaJugador2.innerHTML = `
            <div><strong>${carta2.nombre}</strong></div>
            <div><strong>${stat2.toUpperCase()}:</strong> ${carta2[stat2]}</div>
        `;
        
        // Determinar el ganador
        let resultado;
        if (carta1[stat1] > carta2[stat2]) {
            resultado = `${jugador1.nombre} gana esta batalla!`;
            this.elementos.batallaJugador1.classList.add('winner');
            this.elementos.batallaJugador2.classList.add('loser');
            jugador2.marcarCartaComoUsada(carta2.id);
        } else if (carta2[stat2] > carta1[stat1]) {
            resultado = `${jugador2.nombre} gana esta batalla!`;
            this.elementos.batallaJugador1.classList.add('loser');
            this.elementos.batallaJugador2.classList.add('winner');
            jugador1.marcarCartaComoUsada(carta1.id);
        } else {
            resultado = '¡Empate! Ambas cartas permanecen en juego.';
        }
        
        this.elementos.resultadoBatalla.textContent = resultado;
        this.registrarMensaje(resultado);
        
        // Avanzar al siguiente turno después de un breve retraso
        setTimeout(() => {
            this.siguienteTurno();
        }, 10000); // 10 segundos de espera
    }

    siguienteTurno() {
        // Limpiar el área de batalla
        this.elementos.batallaJugador1.innerHTML = '';
        this.elementos.batallaJugador2.innerHTML = '';
        this.elementos.batallaJugador1.classList.remove('winner', 'loser');
        this.elementos.batallaJugador2.classList.remove('winner', 'loser');
        this.elementos.resultadoBatalla.textContent = 'VS';
        
        // Reiniciar las selecciones
        this.estadoJuego.jugador1.cartaSeleccionada = null;
        this.estadoJuego.jugador2.cartaSeleccionada = null;
        
        this.estadoJuego.turno++;
        
        // Si hemos completado todos los turnos, mostrar el resultado final
        if (this.estadoJuego.turno > this.estadoJuego.turnosTotales) {
            this.terminarJuego();
            return;
        }
        
        // Determinar quién ataca en el siguiente turno
        if (this.estadoJuego.turno === 1) {
            this.estadoJuego.jugadorAtacante = 1;
            this.estadoJuego.jugadorDefensor = 2;
        } else if (this.estadoJuego.turno === 2) {
            this.estadoJuego.jugadorAtacante = 2;
            this.estadoJuego.jugadorDefensor = 1;
        } else if (this.estadoJuego.turno === 1) {
            // Turno aleatorio
            this.estadoJuego.jugadorAtacante = Math.random() < 0.5 ? 1 : 2;
            this.estadoJuego.jugadorDefensor = this.estadoJuego.jugadorAtacante === 1 ? 2 : 1;
            this.registrarMensaje(`Se ha decidido aleatoriamente que ${this.estadoJuego[`jugador${this.estadoJuego.jugadorAtacante}`].nombre} ataca en este turno.`);
        }
        
        this.iniciarFaseBatalla();
    }

    terminarJuego() {
        // Contar las cartas restantes para cada jugador
        const cartasRestantesJ1 = this.estadoJuego.jugador1.obtenerCartasRestantes();
        const cartasRestantesJ2 = this.estadoJuego.jugador2.obtenerCartasRestantes();

        
        let resultado;
        if (cartasRestantesJ1 > cartasRestantesJ2) {
            resultado = `¡${this.estadoJuego.jugador1.nombre} ha ganado con ${cartasRestantesJ1} cartas restantes!`;
        } else if (cartasRestantesJ2 > cartasRestantesJ1) {
            resultado = `¡${this.estadoJuego.jugador2.nombre} ha ganado con ${cartasRestantesJ2} cartas restantes!`;
        } else {
            resultado = '¡El juego ha terminado en empate!';
        }
        
        this.registrarMensaje('──────────────────────────────────');
        this.registrarMensaje('JUEGO TERMINADO');
        this.registrarMensaje(resultado);
        
        // Ocultar las secciones de batalla y mostrar un botón para reiniciar
        this.elementos.seccionBatalla.innerHTML = `
            <div class="centered">
                <h2>${resultado}</h2>
                <button id="restartGame">Jugar de Nuevo</button>
            </div>
        `;
        
        document.getElementById('restartGame').addEventListener('click', () => {
            location.reload();
        });
        this.mostrarCartas();
    }

    registrarMensaje(mensaje) {
        const entradaRegistro = document.createElement('div');
        entradaRegistro.textContent = mensaje;
        this.elementos.registroJuego.appendChild(entradaRegistro);
        this.elementos.registroJuego.scrollTop = this.elementos.registroJuego.scrollHeight;
    }
    mostrarCartas() {
        const contenedor1 = this.elementos.cartasJugador1;
        const contenedor2 = this.elementos.cartasJugador2;
        const botonMostrar = this.elementos.mostrarTodasCartas;

        botonMostrar.addEventListener('click', () => {
            if (contenedor1.classList.contains('hidden') && contenedor2.classList.contains('hidden')) {
                contenedor1.classList.remove('hidden');
                contenedor2.classList.remove('hidden');
                botonMostrar.textContent = 'Ocultar Todas Cartas ';
            } else {
                contenedor1.classList.add('hidden');
                contenedor2.classList.add('hidden');
                botonMostrar.textContent = 'Mostrar Todas Cartas';
            }
        });

        
    }
        
}

// Iniciar el juego cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const juego = new JuegoCartas();
});