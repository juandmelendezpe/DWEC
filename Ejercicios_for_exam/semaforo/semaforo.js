document.addEventListener('DOMContentLoaded', () => {
    const rojo = document.getElementById('rojo');
    const amarillo = document.getElementById('amarillo');
    const verde = document.getElementById('verde');
    let intervalId;

    const encenderLuz = (luz) => {
        rojo.classList.remove('encendido', 'parpadeo');
        amarillo.classList.remove('encendido', 'parpadeo');
        verde.classList.remove('encendido', 'parpadeo');
        luz.classList.add('encendido');
    };

    const cicloSemaforo = () => {
        encenderLuz(rojo);
        setTimeout(() => {
            encenderLuz(verde);
            setTimeout(() => {
                verde.classList.add('parpadeo');
                setTimeout(() => {
                    verde.classList.remove('parpadeo');
                    encenderLuz(amarillo);
                    setTimeout(() => {
                        cicloSemaforo();
                    }, 2000);
                }, 3000);
            }, 6000);
        }, 6000);
    };

    const cambiarRojoVerde = () => {
        let estado = false;
        intervalId = setInterval(() => {
            estado = !estado;
            encenderLuz(estado ? rojo : verde);
        }, 1000);
    };

    const parpadearAmbar = () => {
        intervalId = setInterval(() => {
            amarillo.classList.toggle('encendido');
        }, 1000);
    };

    rojo.addEventListener('click', () => {
        clearInterval(intervalId);
        cicloSemaforo();
    });

    amarillo.addEventListener('click', () => {
        clearInterval(intervalId);
        cambiarRojoVerde();
    });

    verde.addEventListener('click', () => {
        clearInterval(intervalId);
        parpadearAmbar();
    });
});