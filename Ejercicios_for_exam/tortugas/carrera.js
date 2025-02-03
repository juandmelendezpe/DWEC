document.addEventListener('DOMContentLoaded', () => {
    const tortugas = [
        document.getElementById('tortuga1'),
        document.getElementById('tortuga2'),
        document.getElementById('tortuga3')
    ];

    const iniciarButton = document.getElementById('iniciar');

    const obtenerNumeroAleatorio = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const moverTortuga = async (tortuga, velocidad, retraso) => {
        await new Promise(resolve => setTimeout(resolve, retraso * 1000));
        let distancia = 0;
        const intervalo = setInterval(() => {
            distancia += velocidad;
            tortuga.style.left = `${distancia}px`;
            if (distancia >= 800) { // Ajusta esta distancia según el ancho de la pista
                clearInterval(intervalo);
                alert(`${tortuga.id} ha llegado a la meta!`);
            }
        }, 100);
    };

    const iniciarCarrera = () => {
        tortugas.forEach(tortuga => {
            const velocidad = obtenerNumeroAleatorio(1, 10);
            const retraso = obtenerNumeroAleatorio(1, 3);
            moverTortuga(tortuga, velocidad, retraso);
        });
    };

    iniciarButton.addEventListener('click', iniciarCarrera);
});