function crearObjetoLiteral(){
    var punto = new Object();
    punto.x =5 ;
    punto.y = punto.x*2;

    let contador = 0;
    contadorDos = 0;

    punto.mostrarCoodenadas = function(){
        return `(${punto.x},${punto.y})`;
    }
        console.log(punto.mostrarCoodenadas());
        console.log(punto);

}

window.onload = function(){
    document.getElementById("crearLiteral").addEventListener("click",crearObjetoLiteral);
}