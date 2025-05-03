        // Estado del juego
        class carta {
            constructor(nombre, fuerza, defensa, habilidad) {
                this.nombre = nombre;
                this.fuerza = fuerza;
                this.defensa = defensa;
                this.habilidad = habilidad;
                this.id = Date.now(); // ID único para la carta
            }
        }
        class jugador {
            constructor(nombre) {
                this.nombre = nombre;
                this.cartas = [];
                this.cartaSeleccionada = null;
                this.estadisticaSeleccionada = null;    
                this.cartasUsadas = [];
            }
        }
        class estadoJuego {
            constructor() {
                this.jugador1 = new jugador('Jugador 1');
                this.jugador2 = new jugador('Jugador 2');
                this.turno = 1;
                this.turnosTotales = 3;
                this.faseActual = 'setup'; // setup, createCards, battle
                this.jugadorAtacante = 1;
                this.jugadorDefensor = 2;
                this.cartasRestantesJugador1 = 3;
                this.cartasRestantesJugador2 = 3;
            }
        }
        const game = new game();
        
        const gameState = {
            currentPhase: 'setup', // setup, createCards, battle
            player1: {
                name: '',
                cards: [],
                selectedCard: null,
                selectedStat: null,
                usedCards: []
            },
            player2: {
                name: '',
                cards: [],
                selectedCard: null,
                selectedStat: null,
                usedCards: []
            },
            currentPlayer: 1,
            attackingPlayer: 1,
            defendingPlayer: 2,
            turn: 1,
            totalTurns: 3
        };

        // Referencias a elementos DOM
        const elements = {
            playerSetup: document.getElementById('playerSetup'),
            gameBoard: document.getElementById('gameBoard'),
            player1Header: document.getElementById('player1Header'),
            player2Header: document.getElementById('player2Header'),
            player1CardCreation: document.getElementById('player1CardCreation'),
            player2CardCreation: document.getElementById('player2CardCreation'),
            player1Cards: document.getElementById('player1Cards'),
            player2Cards: document.getElementById('player2Cards'),
            p1ShowCards: document.getElementById('p1ShowCards'),
            p2ShowCards: document.getElementById('p2ShowCards'),
            battleSection: document.getElementById('battleSection'),
            currentTurn: document.getElementById('currentTurn'),
            attackOptions: document.getElementById('attackOptions'),
            player1Battle: document.getElementById('player1Battle'),
            player2Battle: document.getElementById('player2Battle'),
            battleResult: document.getElementById('battleResult'),
            gameLog: document.getElementById('gameLog')
        };
        function crearJugador(nombre) {
            
        }
        function crearCarta(nombre, fuerza, defensa, habilidad) {
            return {
                nombre: nombre,
                fuerza: fuerza,
                defensa: defensa,
                habilidad: habilidad,
                id: Date.now() // ID único para la carta
            };
        }
        function generarCartas(jugador) {
            const contenedorCartas = document.getElementById(`cartasJugador${jugador}`);
            contenedorCartas.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas cartas

            gameState[`player${jugador}`].cartas.forEach(carta => {
                carta.id = Date.now(); // Asignar un ID único a la carta
                const cartaElemento = document.createElement('div');
                cartaElemento.classList.add('carta');
                cartaElemento.dataset.id = carta.id;
                cartaElemento.innerHTML = `
                    <div><strong>Nombre:</strong> ${carta.nombre}</div>
                    <div><strong>Fuerza:</strong> ${carta.fuerza}</div>
                    <div><strong>Defensa:</strong> ${carta.defensa}</div>
                    <div><strong>Habilidad:</strong> ${carta.habilidad}</div>
                `;
                cartaElemento.addEventListener('click', function() {
                    seleccionarCarta(jugador, carta.id);
                });
                contenedorCartas.appendChild(cartaElemento);
            });
            const botonMostrar = document.getElementById(`mostrarCartasJugador${jugador}`);
            if (gameState[`player${jugador}`].cartas.length > 0) {
                botonMostrar.classList.remove('hidden');
            } else {
                botonMostrar.classList.add('hidden');
            }
        }


        function ocultarCartas(jugador) {
            const contenedorCartas = document.getElementById(`cartasJugador${jugador}`);
            contenedorCartas.classList.toggle('hidden');
            const botonMostrar = document.getElementById(`mostrarCartasJugador${jugador}`);
            botonMostrar.textContent = contenedorCartas.classList.contains('hidden') ? 'Mostrar Cartas' : 'Ocultar Cartas';
        }
        function mostrarCartas(jugador) {
            const contenedorCartas = document.getElementById(`cartasJugador${jugador}`);
            contenedorCartas.classList.remove('hidden');
            const botonMostrar = document.getElementById(`mostrarCartasJugador${jugador}`);
            botonMostrar.textContent = 'Ocultar Cartas';
        }
        function seleccionarCarta(jugador, idCarta) {
            const cartas = document.querySelectorAll(`#cartasJugador${jugador} .carta`);
            cartas.forEach(carta => carta.classList.remove('selected'));

            const cartaSeleccionada = document.querySelector(`#cartasJugador${jugador} .carta[data-id="${idCarta}"]`);
            if (cartaSeleccionada) {
                cartaSeleccionada.classList.add('selected');
            }
            const carta = gameState[`player${jugador}`].cards.find(c => c.id === idCarta);
            gameState[`player${jugador}`].selectedCard = carta;
           // logMessage(`${gameState[`player${jugador}`].name} ha seleccionado la carta: ${carta.nombre}`);
           alert(`${gameState[`player${jugador}`].name} ha seleccionado la carta: ${carta.nombre}`);

        }
        function aleatoriamente() {
            const jugadorAtacante = Math.random() < 0.5 ? 1 : 2;
            const jugadorDefensor = jugadorAtacante === 1 ? 2 : 1;
            gameState.attackingPlayer = jugadorAtacante;
            gameState.defendingPlayer = jugadorDefensor;
            logMessage(`Se ha decidido aleatoriamente que ${gameState[`player${jugadorAtacante}`].name} ataca en este turno.`);
        }
        function turnos() {
            const jugadorAtacante = gameState.attackingPlayer;
            const jugadorDefensor = gameState.defendingPlayer;
            gameState.turn++;
            if (gameState.turn > gameState.totalTurns) {
                endGame();
                return;
            }
            if (gameState.turn === 1) {
                gameState.attackingPlayer = 1;
                gameState.defendingPlayer = 2;
            } else if (gameState.turn === 2) {
                gameState.attackingPlayer = 2;
                gameState.defendingPlayer = 1;
            } else if (gameState.turn === 3) {
                aleatoriamente();
            }
            startBattlePhase();
        }
        function ganador() {
            const numCartas = 3;
            const cartasRestantesJugador1 = numCartas - gameState.player1.usedCards.length;
            const cartasRestantesJugador2 = numCartas - gameState.player2.usedCards.length;
            let resultado;
            if (cartasRestantesJugador1 > cartasRestantesJugador2) {
                resultado = `¡${gameState.player1.name} ha ganado con ${cartasRestantesJugador1} cartas restantes!`;
            } else if (cartasRestantesJugador2 > cartasRestantesJugador1) {
                resultado = `¡${gameState.player2.name} ha ganado con ${cartasRestantesJugador2} cartas restantes!`;
            } else {
                resultado = '¡El juego ha terminado en empate!';
            }
            logMessage('──────────────────────────────────');
            logMessage('JUEGO TERMINADO');
            logMessage(resultado);
            elements.battleSection.innerHTML = `
                <div class="centered">

                    <h2>${resultado}</h2>
                    <button id="restartGame">Jugar de Nuevo</button>
                </div>
            `;
            document.getElementById('restartGame').addEventListener('click', function() {
                location.reload();
            });
        }
        function enfrentamiento(){
            const carta1 = gameState.player1.selectedCard;
            const carta2 = gameState.player2.selectedCard;
            const estadistica1 = gameState.player1.selectedStat;
            const estadistica2 = gameState.player2.selectedStat;

            elements.player1Battle.innerHTML = `
                <div><strong>${carta1.nombre}</strong></div>
                <div><strong>${estadistica1.toUpperCase()}:</strong> ${carta1[estadistica1]}</div>
            `;

            elements.player2Battle.innerHTML = `
                <div><strong>${carta2.nombre}</strong></div>
                <div><strong>${estadistica2.toUpperCase()}:</strong> ${carta2[estadistica2]}</div>
            `;
            let resultado;

            if (carta1[estadistica1] > carta2[estadistica2]) {
                resultado = `${gameState.player1.name} gana esta batalla!`;
                elements.player1Battle.classList.add('winner');
                elements.player2Battle.classList.add('loser');
                gameState.player2.usedCards.push(carta2.id);
            }
            else if (carta2[estadistica2] > carta1[estadistica1]) {
                resultado = `${gameState.player2.name} gana esta batalla!`;
                elements.player1Battle.classList.add('loser');
                elements.player2Battle.classList.add('winner');
                gameState.player1.usedCards.push(carta1.id);
            } else {
                resultado = '¡Empate! Ambas cartas permanecen en juego.';
            }
            elements.battleResult.textContent = resultado;
            logMessage(resultado);
            setTimeout(() => {
                nextTurn();
            }, 5000);
        }
        function validarPuntos(jugador) {
            const prefijo = `p${jugador}Card`;
            const fuerza = parseInt(document.getElementById(`${prefijo}Fuerza`).value) || 0;
            const defensa = parseInt(document.getElementById(`${prefijo}Defensa`).value) || 0;
            const habilidad = parseInt(document.getElementById(`${prefijo}Habilidad`).value) || 0;

            const total = fuerza + defensa + habilidad;
            const restantes = 30 - total;

            document.getElementById(`p${jugador}PointsRemaining`).textContent = `Puntos disponibles: ${restantes}`;

            if (restantes < 0) {
                document.getElementById(`p${jugador}PointsRemaining`).classList.add('red');
                document.getElementById(`p${jugador}CreateCard`).disabled = true;
            } else {
                document.getElementById(`p${jugador}PointsRemaining`).classList.remove('red');
                document.getElementById(`p${jugador}CreateCard`).disabled = false;
            }
        }
        













        // Inicializar el juego
        document.getElementById('startGame').addEventListener('click', function() {
            const player1Name = document.getElementById('player1Name').value.trim() || 'Jugador 1';
            const player2Name = document.getElementById('player2Name').value.trim() || 'Jugador 2';
            
            gameState.player1.name = player1Name;
            gameState.player2.name = player2Name;
            
            elements.player1Header.textContent = player1Name;
            elements.player2Header.textContent = player2Name;
            
            elements.playerSetup.classList.add('hidden');
            elements.gameBoard.classList.remove('hidden');
            
            gameState.currentPhase = 'createCards'; // Cambiar a la fase de creación de cartas
            
            logMessage(`¡El juego ha comenzado! ${player1Name} creará sus cartas primero.`);
        });

        // Eventos para la creación de cartas
        document.getElementById('p1CreateCard').
        addEventListener('click', createCard.bind(null, 1));
        document.getElementById('p2CreateCard').
        addEventListener('click', createCard.bind(null, 2));

        // Validación de puntos disponibles para el jugador 1
        ['p1CardFuerza', 'p1CardDefensa', 'p1CardHabilidad'].forEach(id => {
            document.getElementById(id).addEventListener('input', function() {
                validatePoints(1);
            });
        });

        // Validación de puntos disponibles para el jugador 2
        ['p2CardFuerza', 'p2CardDefensa', 'p2CardHabilidad'].forEach(id => {
            document.getElementById(id).addEventListener('input', function() {
                validatePoints(2);
            });
        });

        // Mostrar cartas
        elements.p1ShowCards.addEventListener('click', function() {
            toggleShowCards(1);
        });

        elements.p2ShowCards.addEventListener('click', function() {
            toggleShowCards(2);
        });

        // Opciones de ataque
        document.getElementById('attackFuerza').addEventListener('click', function() {
            selectAttackType('fuerza');
        });

        document.getElementById('attackDefensa').addEventListener('click', function() {
            selectAttackType('defensa');
        });

        document.getElementById('attackHabilidad').addEventListener('click', function() {
            selectAttackType('habilidad');
        });

        // Funciones del juego
        
        function validatePoints(playerNum) {
            const prefix = `p${playerNum}Card`;
            const fuerza = parseInt(document.getElementById(`${prefix}Fuerza`).value) || 0;
            const defensa = parseInt(document.getElementById(`${prefix}Defensa`).value) || 0;
            const habilidad = parseInt(document.getElementById(`${prefix}Habilidad`).value) || 0;
            
            const total = fuerza + defensa + habilidad;
            const remaining = 30 - total;
            
            document.getElementById(`p${playerNum}PointsRemaining`).
            textContent = `Puntos disponibles: ${remaining}`;
            
            if (remaining < 0) {
                //document.getElementById(`p${playerNum}PointsRemaining`).style.color = 'red';
                document.getElementById(`p${playerNum}PointsRemaining`).classList.add('red');

                document.getElementById(`p${playerNum}CreateCard`).disabled = true;
            } else {
                //document.getElementById(`p${playerNum}PointsRemaining`).style.color = 'black';
                document.getElementById(`p${playerNum}PointsRemaining`).classList.remove('black'); 
                document.getElementById(`p${playerNum}CreateCard`).disabled = false;
            }
        }

        function createCard(playerNum) {
            const prefix = `p${playerNum}Card`;
            const name = document.getElementById(`${prefix}Name`).value.trim() ||
             `Carta ${playerNum}-${gameState[`player${playerNum}`].cards.length + 1}`;
            const fuerza = parseInt(document.getElementById(`${prefix}Fuerza`).value) || 0;
            const defensa = parseInt(document.getElementById(`${prefix}Defensa`).value) || 0;
            const habilidad = parseInt(document.getElementById(`${prefix}Habilidad`).value) || 0;
            
            // Validar que la suma de puntos no exceda 30
            if (fuerza + defensa + habilidad > 30) {
                alert('La suma de los valores no puede superar 30.');
                return;
            }
            
            // Crear la carta
            const card = {
                name,
                fuerza,
                defensa,
                habilidad,
                id: Date.now() // ID único para la carta
            };
            
            // Añadir la carta al jugador correspondiente
            gameState[`player${playerNum}`].cards.push(card);
            
            // Actualizar la interfaz
            renderCards(playerNum);
            
            // Resetear los campos del formulario
            document.getElementById(`${prefix}Name`).value = '';
            document.getElementById(`${prefix}Fuerza`).value = '';
            document.getElementById(`${prefix}Defensa`).value = '';
            document.getElementById(`${prefix}Habilidad`).value = '';
            document.getElementById(`p${playerNum}PointsRemaining`).textContent = 'Puntos disponibles: 30';
            
            logMessage(`${gameState[`player${playerNum}`].name} ha creado una nueva carta: ${name}`);
            
            // Si el jugador ha creado 3 cartas, pasar al siguiente jugador o fase
            if (gameState[`player${playerNum}`].cards.length === 1) {
                elements[`player${playerNum}CardCreation`].classList.add('hidden');
                elements[`p${playerNum}ShowCards`].classList.remove('hidden');
                
                if (playerNum === 1) {
                    // El jugador 1 ha terminado, ahora le toca al jugador 2
                    elements.player2CardCreation.classList.remove('hidden');
                    elements.player1Cards.classList.add('hidden');
                    logMessage(`${gameState.player1.name} ha creado sus 3 cartas. Ahora es el turno de ${gameState.player2.name}.`);
                } else {
                    // Ambos jugadores han terminado de crear cartas, comenzar la fase de batalla
                    elements.player2Cards.classList.add('hidden');
                    elements.battleSection.classList.remove('hidden');
                    gameState.currentPhase = 'battle'; // Cambiar a la fase de batalla
                    startBattlePhase(); // Iniciar la fase de batalla
                }
            }
        }

        function renderCards(playerNum) {
            const cardsContainer = elements[`player${playerNum}Cards`];
            cardsContainer.innerHTML = '';
            
            gameState[`player${playerNum}`].cards.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.dataset.cardId = card.id;
                
                // Si la carta ya ha sido usada, añadir la clase correspondiente
                if (gameState[`player${playerNum}`].usedCards.includes(card.id)) {
                    cardElement.classList.add('used');
                }
                
                cardElement.innerHTML = `
                    <div><strong>Nombre:</strong> ${card.name}</div>
                    <div class="stats"><strong>Fuerza:</strong> ${card.fuerza}</div>
                    <div class="stats"><strong>Defensa:</strong> ${card.defensa}</div>
                    <div class="stats"><strong>Habilidad:</strong> ${card.habilidad}</div>
                `;
                
                // Añadir evento click solo si estamos en fase de batalla y es el turno del jugador
                if (gameState.currentPhase === 'battle' && gameState.currentPlayer === playerNum &&
                    !gameState[`player${playerNum}`].usedCards.includes(card.id)) {
                    cardElement.addEventListener('click', function() {
                        selectCard(playerNum, card.id);
                    });
                }
                
                cardsContainer.appendChild(cardElement);
            });
        }

        function toggleShowCards(playerNum) {
            const cardsContainer = elements[`player${playerNum}Cards`];
            
            if (cardsContainer.classList.contains('hidden')) {
                cardsContainer.classList.remove('hidden');
                elements[`p${playerNum}ShowCards`].textContent = 'Ocultar';
            } else {
                cardsContainer.classList.add('hidden');
                elements[`p${playerNum}ShowCards`].textContent = 'Mostrar';
            }
        }

        function startBattlePhase() {
            gameState.currentPlayer = gameState.attackingPlayer;
            updateTurnIndicator();
            
            if (gameState.attackingPlayer === 1) {
                elements.p1ShowCards.classList.remove('hidden');
                elements.p2ShowCards.classList.add('hidden');
                elements.player1Cards.classList.remove('hidden');
                elements.player2Cards.classList.add('hidden');
            } else {
                elements.p1ShowCards.classList.add('hidden');
                elements.p2ShowCards.classList.remove('hidden');
                elements.player1Cards.classList.add('hidden');
                elements.player2Cards.classList.remove('hidden');
            }
            
            // Mostrar las opciones de ataque solo al jugador atacante
            elements.attackOptions.style.display = gameState.currentPlayer === gameState.attackingPlayer ? 'block' : 'none';
            
            renderCards(1);
            renderCards(2);
        }

        function updateTurnIndicator() {
            const playerName = gameState[`player${gameState.currentPlayer}`].name;
            elements.currentTurn.textContent = `Turno ${gameState.turn} de ${gameState.totalTurns} -
             ${playerName} ${gameState.currentPlayer === gameState.attackingPlayer ? 'ataca' : 'defiende'}`;
        }

        function selectAttackType(type) {
            gameState[`player${gameState.attackingPlayer}`].selectedStat = type;
            elements.attackOptions.style.display = 'none';
            
            let defenseType;
            switch (type) {
                case 'fuerza':
                    defenseType = 'defensa';
                    break;
                case 'defensa':
                    defenseType = 'fuerza';
                    break;
                case 'habilidad':
                    defenseType = 'habilidad';
                    break;
            }
            
            gameState[`player${gameState.defendingPlayer}`].selectedStat = defenseType;
            
            logMessage(`${gameState[`player${gameState.attackingPlayer}`].name} ha decidido atacar con ${type.toUpperCase()}`);
            logMessage(`${gameState[`player${gameState.defendingPlayer}`].name} deberá defender con ${defenseType.toUpperCase()}`);
            
            // Cambiar al jugador defensor
            gameState.currentPlayer = gameState.defendingPlayer;
            updateTurnIndicator();
            
            if (gameState.currentPlayer === 1) {
                elements.p1ShowCards.classList.remove('hidden');
                elements.p2ShowCards.classList.add('hidden');
                elements.player1Cards.classList.remove('hidden');
                elements.player2Cards.classList.add('hidden');
            } else {
                elements.p1ShowCards.classList.add('hidden');
                elements.p2ShowCards.classList.remove('hidden');
                elements.player1Cards.classList.add('hidden');
                elements.player2Cards.classList.remove('hidden');
            }
            
            renderCards(1);
            renderCards(2);
        }

        function selectCard(playerNum, cardId) {
            const cards = document.querySelectorAll(`#player${playerNum}Cards .card`);
            cards.forEach(card => card.classList.remove('selected'));
            
            // Encontrar y seleccionar la carta
            const cardElement = document.querySelector(`#player${playerNum}Cards .card[data-card-id="${cardId}"]`);
            if (cardElement) {
                cardElement.classList.add('selected');
            }
            
            // Actualizar el estado del juego
            const card = gameState[`player${playerNum}`].cards.find(c => c.id === cardId);
            gameState[`player${playerNum}`].selectedCard = card;
            
            logMessage(`${gameState[`player${playerNum}`].name} ha seleccionado la carta: ${card.name}`);
            
            // Si ambos jugadores han seleccionado una carta, resolver la batalla
            if (gameState.player1.selectedCard && gameState.player2.selectedCard) {
                resolveBattle();
            }
        }

        function resolveBattle() {
            const card1 = gameState.player1.selectedCard;
            const card2 = gameState.player2.selectedCard;
            const stat1 = gameState.player1.selectedStat;
            const stat2 = gameState.player2.selectedStat;
            
            // Mostrar las cartas en el área de batalla
            elements.player1Battle.innerHTML = `
                <div><strong>${card1.name}</strong></div>
                <div><strong>${stat1.toUpperCase()}:</strong> ${card1[stat1]}</div>
            `;
            
            elements.player2Battle.innerHTML = `
                <div><strong>${card2.name}</strong></div>
                <div><strong>${stat2.toUpperCase()}:</strong> ${card2[stat2]}</div>
            `;
            
            // Determinar el ganador
            let result;
            if (card1[stat1] > card2[stat2]) {
                result = `${gameState.player1.name} gana esta batalla!`;
                elements.player1Battle.classList.add('winner');
                elements.player2Battle.classList.add('loser');
                gameState.player2.usedCards.push(card2.id);
            } else if (card2[stat2] > card1[stat1]) {
                result = `${gameState.player2.name} gana esta batalla!`;
                elements.player1Battle.classList.add('loser');
                elements.player2Battle.classList.add('winner');
                gameState.player1.usedCards.push(card1.id);
            } else {
                result = '¡Empate! Ambas cartas permanecen en juego.';
            }
            
            elements.battleResult.textContent = result;
            logMessage(result);
            
            // Avanzar al siguiente turno después de un breve retraso
            setTimeout(() => {
                nextTurn();
            }, 5000);
        }

        function nextTurn() {
            // Limpiar el área de batalla
            elements.player1Battle.innerHTML = '';
            elements.player2Battle.innerHTML = '';
            elements.player1Battle.classList.remove('winner', 'loser');
            elements.player2Battle.classList.remove('winner', 'loser');
            elements.battleResult.textContent = 'VS';
            
            // Reiniciar las selecciones
            gameState.player1.selectedCard = null;
            gameState.player2.selectedCard = null;
            
            gameState.turn++;
            
            // Si hemos completado todos los turnos, mostrar el resultado final
            if (gameState.turn > gameState.totalTurns) {
                endGame();
                return;
            }
            
            // Determinar quién ataca en el siguiente turno
            if (gameState.turn === 1) {
                gameState.attackingPlayer = 1;
                gameState.defendingPlayer = 2;
            } else if (gameState.turn === 2) {
                gameState.attackingPlayer = 2;
                gameState.defendingPlayer = 1;
            } else if (gameState.turn === 3) {
                // Turno aleatorio
                gameState.attackingPlayer = Math.random() < 0.5 ? 1 : 2;
                gameState.defendingPlayer = gameState.attackingPlayer === 1 ? 2 : 1;
                logMessage(`Se ha decidido aleatoriamente que ${gameState[`player${gameState.attackingPlayer}`].name} ataca en este turno.`);
            }
            
            startBattlePhase();
        }

        function endGame() {
            // Contar las cartas restantes para cada jugador
            let numCard= 3;
            const p1RemainingCards = numCard - gameState.player1.usedCards.length;
            const p2RemainingCards = numCard - gameState.player2.usedCards.length;
            
            let result;
            if (p1RemainingCards > p2RemainingCards) {
                result = `¡${gameState.player1.name} ha ganado con ${p1RemainingCards} cartas restantes!`;
            } else if (p2RemainingCards > p1RemainingCards) {
                result = `¡${gameState.player2.name} ha ganado con ${p2RemainingCards} cartas restantes!`;
            } else {
                result = '¡El juego ha terminado en empate!';
            }
            
            logMessage('──────────────────────────────────');
            logMessage('JUEGO TERMINADO');
            logMessage(result);
            
            // Ocultar las secciones de batalla y mostrar un botón para reiniciar
            elements.battleSection.innerHTML = `
                <div class="centered">
                    <h2>${result}</h2>
                    <button id="restartGame">Jugar de Nuevo</button>
                </div>
            `;
            
            document.getElementById('restartGame').addEventListener('click', function() {
                location.reload();
            });
        }

        function logMessage(message) {
            const logEntry = document.createElement('div');
            logEntry.textContent = message;
            elements.gameLog.appendChild(logEntry);
            elements.gameLog.scrollTop = elements.gameLog.scrollHeight;
        }
