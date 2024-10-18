function cambiarColorBarraLarga() {
    alert("...Cambiando color de la barra larga");

    document.getElementById("barraLarga").classList.toggle("colorMarronBarraLarga");
}
function cambiarColorCuadrados(id) {
    alert("...Cambiamos color al cuadrado -->" + id);

    document.getElementById("cuadrado"+id).classList.toggle("cuadradoColorAmarillo");
}

window.onload = function() {
    document.getElementById("barraLarga").addEventListener("click", cambiarColorBarraLarga);

    document.getElementById("cuadrado1").addEventListener("click", function(){  cambiarColorCuadrados("1")});

    document.getElementById("cuadrado2").addEventListener("click", function(){  cambiarColorCuadrados("2")});


    }