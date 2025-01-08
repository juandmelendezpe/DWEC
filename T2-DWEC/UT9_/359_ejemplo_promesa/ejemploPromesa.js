function ejemploPromesa() {
    var promesa = new Promise((resolver, rechazar) => {
        let n1 = 1;
        let n2 = 2;
    if(n1 == n2){
        resolver("son iguales");
    }else{
        rechazar(Error("no son iguales"));
        
    }
});
promesa.then((respuesta) => {
    console.log("se muestra el mensaje: " + respuesta);
})
    
}


window.onload = function() {
    document.getElementById("ejemploPromesa").addEventListener("click",ejemploPromesa);
}