function utilizarThisPropiedades(){
    let punto = {
        x:19,
        y:36,
        mostrarCoordenadas:function(){
            return `(${this.x},${this.y})`

        }
    }
    console.log(punto.mostrarCoordenadas());
    
}

function utilizarThisPropiedadesExternas(){
    function doblarX(){
        this.x*=2;
    }
    let punto={
        x: 15,
        y:7,
        doble:doblarX 
    };
    let puntoDos={
        x: 15,
        y:7,
        dobleDos:function(){ // --> se puede declarar una funcion anonima directamente
            this.x*=2;
        }
    };
    let incógnita={
        x: 5,
        dbl:doblarX
    };

    punto.doble();
    puntoDos.dobleDos();
    incógnita.dbl();

    console.log("Llama a la funcion que esta afuera ------->" + punto.x);
    console.log(`Llama a la funcion que esta dentro -------> ${puntoDos.x}`);
    console.log("Incognita ------->" + incógnita.x);
    console.log("<----------------------------------------------------->" );

    punto.doble();
    puntoDos.dobleDos();
    incógnita.dbl();
}
window.onload = function(){
    document.getElementById("objetoThis_propiedades").addEventListener("click",utilizarThisPropiedades);
    document.getElementById("objetoThis_externas").addEventListener("click",utilizarThisPropiedadesExternas);

}