function crearObjetoLlaves(){
    let punto = {
        x:19,
        y:36,
        mostrarCoordenadas:function(){
            return `(${punto.x},${punto.y})`;
        }
    };
    console.log(punto.mostrarCoordenadas());
}
window.onload = function(){
    document.getElementById("crearObejtoLlaves").addEventListener("click",crearObjetoLlaves);
}