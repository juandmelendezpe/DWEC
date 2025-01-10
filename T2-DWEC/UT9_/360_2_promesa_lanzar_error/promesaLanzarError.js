function promesaLanzarError() {
    var promesa = new Promise((resolver, rechazar) => {
        throw new Error("Error lanzado");
    });
    promesa.then((respuesta) => {
        console.log("me ha ido bien: " + respuesta);
        
    }).catch((error) => {
        console.log("me ha ido mal: " + error.message);
    });
}


window.onload = function() {
    
    document.getElementById("LanzarError").addEventListener("click", promesaLanzarError)
}