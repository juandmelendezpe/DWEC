// Version: 1.0
//crear una función que al hacer click muestre el mensaje en la pagina .html el saludo correspondiente ademas tiene mostrar su nombre
function saludar(){
    var nombre = prompt("Ingrese su nombre");
    document.getElementById("mensaje").innerHTML = "Hola " + nombre + ", bienvenido a mi página";
}
window.onload = function(){
    document.getElementById("enviar").addEventListener("click", saludar);
}



//DECLARAR E INVOCAR FUNCIONES
//Declarar una función
function saludar(){
    console.log("Hola, soy una función");
}
