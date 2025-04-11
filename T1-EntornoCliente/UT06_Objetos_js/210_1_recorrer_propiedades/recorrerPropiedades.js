function recorrerPropiedades(){
    let punto = {
        x:10,
        y:20,
        mostrarCoodenadas:function(){
            return `(${this.x},${this.y})`;
        }
    }
    for(let prop in punto){
        if(typeof punto[prop] !== "function"){
            console.log(`${prop} tiene el valor ${punto[prop]}`);
        }
    }
}

window.onload = function(){
    document.getElementById("recorrerPropiedades").addEventListener("click", recorrerPropiedades);
}