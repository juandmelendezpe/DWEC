function encadenamientoMetodos() {
  var n = 0;
  var promesa = new Promise(function (resolver, rechazar) {
    let intervalo = setInterval(function () {
      n++;
      console.log("Han pasado " + n + " segundos");

      if (n == 10) {
        resolver("han psado 10 segundos");
        clearInterval(intervalo);
      }
    }, 1000);
  });
  promesa
    .then(function (mensaje) {
      console.log(mensaje);
      return "Se ha cerrado el temporizador";
    })
    .then((mensaje) => console.log(mensaje));
  console.log("fin de la cadena de promesas");
}

window.onload = function () {
  document
    .getElementById("encadenamiento")
    .addEventListener("click", encadenamientoMetodos);
};
