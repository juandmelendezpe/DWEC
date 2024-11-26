function dinoVidas(i) {
  document.getElementById(i.target.id).classList.toggle("dino_rojo");
}
function dinoEventos() {
  let elemento = document.getElementsByClassName("dino_verde");
  for (let i = 0; (i = elemento.length); i++) {
    elemento[i].addEventListener("click", function (i) {
      dinoVidas(i);
    });
  }
}

/*function crear_Div_Img() {
  const n = 9;
  const figura1 = document.getElementById("figuras1");
  let arrayId = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
  figura1.innerHTML = "";
  for (let i = 1; i <= n; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    // const numeros = Array.from({ length: 9 }, (_, i) => i + 1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // numeros.sort(() => Math.random() - 0.5); // Mezclar los números
    let mezclarArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
   arrayId.sort(() => Math.random() - 0.5); // Mezclar los números
   
   img.src = "/img/ios_" + arrayId[i]  + ".png";
    img.alt = "ios_" + arrayId[i];
    img.id = "ios_" + arrayId[i];
    div.appendChild(img);
    figura1.appendChild(div);
  }
}
function arrayAleatorio(array) {
  let mezclarArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return mezclarArray;
  }
}
  */

function mezclarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function crear_Div_Img() {
  const n = 9;
  const figura1 = document.getElementById("figuras1");
  let arrayId = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  figura1.innerHTML = "";
  arrayId = mezclarArray(arrayId); // Mezclar los números fuera del bucle
  for (let i = 0; i < n; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = "/img/ios_" + arrayId[i] + ".png";
    img.alt = "ios_" + arrayId[i];
    img.id = "ios_" + arrayId[i];
    div.appendChild(img);
    figura1.appendChild(div);
  }
}
window.onload = function () {
  document.addEventListener("click", crear_Div_Img);
};
