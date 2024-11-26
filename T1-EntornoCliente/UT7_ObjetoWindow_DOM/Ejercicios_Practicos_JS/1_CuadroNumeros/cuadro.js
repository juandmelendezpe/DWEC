function rellenarSecuencial() {
  const divs = document.querySelectorAll("#cuadro1 div");
  divs.forEach((div, index) => {
    div.textContent = index + 1;
  });
}

function borrarContenido() {
  const divs = document.querySelectorAll("#cuadro1 div");
  divs.forEach(div => {
    div.textContent = '';
  });
}

function rellenarAleatorio() {
  const divs = document.querySelectorAll("#cuadro1 div");
  const numeros = Array.from({ length: 9 }, (_, i) => i + 1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  numeros.sort(() => Math.random() - 0.5); // Mezclar los números
  
  divs.forEach((div, index) => { // Asignar un número a cada casilla
    div.textContent = numeros[index];
  });
}

window.onload = function () {
    document.getElementById("rellenarSecuencial").addEventListener("click", rellenarSecuencial);
    document.getElementById("borrar").addEventListener("click", borrarContenido);
    document.getElementById("rellenarAleatorio").addEventListener("click", rellenarAleatorio);
  };