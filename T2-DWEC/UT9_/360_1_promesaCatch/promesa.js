function promesaCatch() {
    var promesa = new Promise((resolver, rechazar) => {
        let n1 = 1;
        let n2 = 3;
    if(n1 == n2){
        resolver("son iguales");
    }else{
        rechazar(Error("no son iguales"));
        // rechazar("no son iguales");
        
    }
});

promesa.then((respuesta) => { 
    console.log("se muestra el mensaje: " + respuesta);
}).catch((error) => {
    console.log("se muestra el error: " + error.message);
})
console.log("fin de la promesa");

    
}

window.onload = function() {
    document.getElementById("promesaCatch").addEventListener("click", promesaCatch)
}