function rellenarSecuencial() {
  const divs = document.querySelectorAll("#number-container div");
  divs.forEach((div, index) => {
    div.textContent = index + 1;
  });
}

function borrarContenido() {
  const divs = document.querySelectorAll("#number-container div");
  divs.forEach(div => {
    div.textContent = '';
  });
}

function rellenarAleatorio() {
  const divs = document.querySelectorAll("#number-container div");
  const numeros = Array.from({ length: 9 }, (_, i) => i + 1);
  numeros.sort(() => Math.random() - 0.5);
  
  divs.forEach((div, index) => {
    div.textContent = numeros[index];
  });
}

window.onload = function () {
    document.getElementById("rellenarSecuencial").addEventListener("click", rellenarSecuencial);
    document.getElementById("borrar").addEventListener("click", borrarContenido);
    document.getElementById("rellenarAleatorio").addEventListener("click", rellenarAleatorio);
  };