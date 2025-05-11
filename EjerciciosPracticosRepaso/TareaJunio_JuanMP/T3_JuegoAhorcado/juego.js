document.addEventListener('DOMContentLoaded', function() {
    // Palabras disponibles para el juego
    const palabras = ["javascript","html", "pyton", "java", "css", "typescript", "react", "angular","vue","nodejs","express","mongodb",];
    
    // Elementos del DOM
    const figuraAhorcado = document.getElementById('hombrecito-figure');
    const contenedorPalabra = document.getElementById('palabra-container');
    const letrasUsadas = document.getElementById('letrasUsadas');
    const mensajeJuego = document.getElementById('mensaje');
    const botonReinicio = document.getElementById('restart-button');
    
    // Estado del juego
    let palabraActual;
    let palabraOculta;
    let errores;
    let letrasIntroducidas;
    let contadorLetras;
    let juegoTerminado;
    
    // Estados del ahorcado
    const estadosAhorcado = [
`  +---+
|    |
|
|
|
|
=========`,
`+---+
|   |
|   O
|
|
|
=========`,
`+---+
|   |
|   O
|   |
|
|
=========`,
`+---+
|   |
|   O
|  /|
|
|
=========`,
`+---+
|   |
|   O
|  /|\\
|
|
=========`,
`+---+
|   |
|   O
|  /|\\
|  /
|
=========`,
`+---+
|   |
|   O
|  /|\\
|  / \\
|
=========`
    ];
    
    // Iniciar juego
    iniciarJuego();
    
    // Función para iniciar el juego
    function iniciarJuego() {
        // Seleccionar palabra aleatoria
        palabraActual = palabras[Math.floor(Math.random() * palabras.length)];
        palabraOculta = Array(palabraActual.length).fill('_');
        errores = 0;
        letrasIntroducidas = [];
        contadorLetras = {};
        juegoTerminado = false;
        
        // Actualizar la interfaz
        actualizarPalabra();
        actualizarAhorcado();
        letrasUsadas.innerHTML = '';
        mensajeJuego.textContent = '';
        mensajeJuego.className = 'mensaje';
        botonReinicio.style.display = 'none';
        
        // Registrar el evento de teclado
        document.addEventListener('keydown', manejarTecla);
    }
    
    // Función para manejar las teclas presionadas
    function manejarTecla(evento) {
        if (juegoTerminado) return;
        
        // Obtener la letra y convertirla a minúscula
        const tecla = evento.key.toLowerCase();
        
        // Verificar si es una letra
        if (/^[a-z]$/.test(tecla)) {
            procesarLetra(tecla);
        }
    }
    
    // Función para procesar una letra
    function procesarLetra(letra) {
        // Actualizar contador de letras
        if (contadorLetras[letra]) {
            contadorLetras[letra]++;
        } else {
            contadorLetras[letra] = 1;
            letrasIntroducidas.push(letra);
        }
        
        // Actualizar la lista de letras usadas
        actualizarLetrasUsadas();
        
        // Verificar si la letra está en la palabra
        if (palabraActual.includes(letra)) {
            // Actualizar la palabra oculta
            for (let i = 0; i < palabraActual.length; i++) {
                if (palabraActual[i] === letra) {
                    palabraOculta[i] = letra;
                }
            }
            actualizarPalabra();
            
            // Verificar si se ha ganado
            if (!palabraOculta.includes('_')) {
                finalizarJuego(true);
            }
        } else {
            // Incrementar errores
            errores++;
            actualizarAhorcado();
            
            // Verificar si se ha perdido
            if (errores >= estadosAhorcado.length - 1) {
                finalizarJuego(false);
            }
        }
    }
    
    // Función para actualizar la palabra en la interfaz
    function actualizarPalabra() {
        contenedorPalabra.innerHTML = '';
        
        for (let i = 0; i < palabraOculta.length; i++) {
            const letraBox = document.createElement('div');
            letraBox.className = 'letraBox';
            letraBox.textContent = palabraOculta[i] !== '_' ? palabraOculta[i] : '';
            contenedorPalabra.appendChild(letraBox);
        }
    }
    
    // Función para actualizar las letras usadas en la interfaz
    function actualizarLetrasUsadas() {
        letrasUsadas.innerHTML = '';
        
        letrasIntroducidas.forEach(letra => {
            const letraUsada = document.createElement('div');
            letraUsada.className = 'letrasUsadas';
            letraUsada.textContent = letra;
            
            if (contadorLetras[letra] > 1) {
                const contador = document.createElement('span');
                contador.className = 'count';
                contador.textContent = contadorLetras[letra];
                letraUsada.appendChild(contador);
            }
            
            letrasUsadas.appendChild(letraUsada);
        });
    }
    
    // Función para actualizar el ahorcado en la interfaz
    function actualizarAhorcado() {
        figuraAhorcado.textContent = estadosAhorcado[errores];
    }
    
    // Función para finalizar el juego
    function finalizarJuego(hasGanado) {
        juegoTerminado = true;
        document.removeEventListener('keydown', manejarTecla);
        
        if (hasGanado) {
            mensajeJuego.textContent = '¡Felicidades! Has ganado.';
            mensajeJuego.className = 'mensaje ganador';
        } else {
            mensajeJuego.textContent = `¡Game Over! La palabra era: ${palabraActual}`;
            mensajeJuego.className = 'mensaje perdedor';
        }
        
        botonReinicio.style.display = 'block';
    }
    
    // Evento para reiniciar el juego
    botonReinicio.addEventListener('click', function() {
        iniciarJuego();
    });
});