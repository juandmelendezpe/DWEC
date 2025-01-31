function cambiarColorBarraLarga() {
    alert("...Cambiando color de la barra larga");

    document.getElementById("barraLarga").classList.toggle("colorMarronBarraLarga");//toggle añade o quita la clase
}
function cambiarColorCuadrados(id) {
    alert("...Cambiamos color al cuadrado -->" + id); //muestra un mensaje con el id del cuadrado

    document.getElementById("cuadrado"+id).classList.toggle("cuadradoColorAmarillo"); //toggle añade o quita la clase
}

window.onload = function() {
    document.getElementById("barraLarga").addEventListener("click", cambiarColorBarraLarga); //al hacer click en la barra larga se llama a la función cambiarColorBarraLarga

    document.getElementById("cuadrado1").addEventListener("click", function(){ cambiarColorCuadrados("1")}); //al hacer click en el cuadrado 1 se llama a la función cambiarColorCuadrados con el parámetro "1"

    document.getElementById("cuadrado2").addEventListener("click", function(){  cambiarColorCuadrados("2")}); // al hacer click en el cuadrado 2 se llama a la función cambiarColorCuadrados con el parámetro "2"
    }