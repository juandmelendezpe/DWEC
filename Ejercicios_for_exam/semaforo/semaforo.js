document.addEventListener("DOMContentLoaded", () => {
  const rojo = document.getElementById("rojo");
  const amarillo = document.getElementById("amarillo");
  const verde = document.getElementById("verde");
  let intervalId;

  // crear una funcion que muestr el tiempo de cada luz

  const tiempoLuz = (luz) => {
    let tiempo = 0;
    switch (luz) {
      case rojo:
        tiempo = 6000;
        break;
      case amarillo:
        tiempo = 3000;
        break;
      case verde:
        tiempo = 6000;
        break;
    }
    return tiempo;
  };

  // Asegurarse de que los elementos HTML existan
  const tiempo = document.querySelector("#tiempo");
  const divContenedor = document.querySelector(".contenedor");

  if (tiempo && divContenedor) {
    tiempo.innerHTML = `<p>Tiempo de luz roja: ${tiempoLuz("rojo")} ms</p>`;
    tiempo.innerHTML += `<p>Tiempo de luz amarilla: ${tiempoLuz("amarillo")} ms</p>`;
    tiempo.innerHTML += `<p>Tiempo de luz verde: ${tiempoLuz("verde")} ms</p>`;
    divContenedor.appendChild(tiempo);
  } else {
    console.error("Elementos HTML no encontrados");
  }

  // Fin de la función

  // crear una funcion que encienda la luz
  const encenderLuz = (luz) => {
    rojo.classList.remove("encendido", "parpadeo");
    amarillo.classList.remove("encendido", "parpadeo");
    verde.classList.remove("encendido", "parpadeo");
    luz.classList.add("encendido");
  };

  // crear una funcion que haga el ciclo del semaforo
  const cicloSemaforo = () => {
    encenderLuz(rojo);
    setTimeout(() => {
      encenderLuz(verde);
      setTimeout(() => {
        verde.classList.add("parpadeo");
        setTimeout(() => {
          verde.classList.remove("parpadeo");
          encenderLuz(amarillo);
          setTimeout(() => {
            cicloSemaforo();
          }, 2000);
        }, 3000);
      }, 6000);
    }, 6000);
  };
 
    // crear una funcion que haga el ciclo del semaforo
  const cambiarRojoVerde = () => {
    let estado = false;
    intervalId = setInterval(() => {
      estado = !estado;
      encenderLuz(estado ? rojo : verde);
    }, 1000);
  };

  // crear una funcion que haga parpadear la luz ambar
  const parpadearAmbar = () => {
    intervalId = setInterval(() => {
      amarillo.classList.toggle("encendido");
    }, 1000);
  };

    // Eventos para los botones del semaforo 
  rojo.addEventListener("click", () => {
    clearInterval(intervalId);
    cicloSemaforo();
  });

  amarillo.addEventListener("click", () => {
    clearInterval(intervalId);
    cambiarRojoVerde();
  });

  verde.addEventListener("click", () => {
    clearInterval(intervalId);
    parpadearAmbar();
  });
});
