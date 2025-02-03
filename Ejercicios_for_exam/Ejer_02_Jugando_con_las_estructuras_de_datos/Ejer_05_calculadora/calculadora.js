
let valorUno = "";
let valorDos = "";
let operacion = "";

function eventos(id){  
  let valor = id.target.textContent;
  if(valor == "C"){
    valorUno = "";
    valorDos = "";
    operacion = "";
    document.getElementById("resultado").textContent = "";
  }else if(valor == "+" || valor == "-" || valor == "x" || valor == "/"){
    operacion = valor;
    document.getElementById("resultado").textContent = "";
  }else if(valor == "="){
    let resultado = 0;
    switch (operacion) {
      case "+":
        resultado = parseInt(valorUno) + parseInt(valorDos);
        break;
      case "-":
        resultado = parseInt(valorUno) - parseInt(valorDos);
        break;
      case "x":
        resultado = parseInt(valorUno) * parseInt(valorDos);
        break;
      case "/":
        resultado = parseInt(valorUno) / parseInt(valorDos);
        break;
    }
    document.getElementById("resultado").textContent = resultado;
  }else if(valor == 0 || valor == 1 || valor == 2 || valor == 3 || 
           valor == 4 || valor == 5 || valor == 6 || valor == 7 || 
           valor == 8 || valor == 9){
    // Un if dentro de otro if ***********
    if(operacion == ""){
      valorUno += valor;
      document.getElementById("resultado").textContent = valorUno;
    }else{
      valorDos += valor;
      document.getElementById("resultado").textContent = valorDos;
    }
    // fin if dentro de otro *************
  }

document.getElementById("valorUno").textContent = valorUno;
document.getElementById("valorDos").textContent = valorDos;
document.getElementById("operacion").textContent = operacion;
// Debajo llave de fin función eventos
}

window.onload = function() {
    let elementos = document.getElementsByClassName("elemento");
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener("click", eventos);
    }
}