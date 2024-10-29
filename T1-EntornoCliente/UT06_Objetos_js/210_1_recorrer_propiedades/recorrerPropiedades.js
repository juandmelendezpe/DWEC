function recorrerPropiedades(){
    let punto = {
        x:10,
        y:20,

        mostrarCoodenadas:function(){
            return `(${this.x},${this.y})`;
        }
    }
    for(let prop in punto){
        
    }
}

window.onload = function(){
    document.getElementById("recorrerPropiedades").addEventListener("click",recorrerpropiedades);
}