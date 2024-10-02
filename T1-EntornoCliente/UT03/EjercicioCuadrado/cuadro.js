// asignar valor a un div
let numero = 9;
document.getElementById("resultado").textContent = numero;

let valorDiv;
valorDiv = document.getElementById("resultado").textContent;
alert("el valor del div es : " + valorDiv);

window.onload = function () {
  document.getElementById("botonRellenar").addEventListener("click", rellenarCubo);
};
