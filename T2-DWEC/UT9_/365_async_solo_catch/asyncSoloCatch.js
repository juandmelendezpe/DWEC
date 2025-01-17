async function AsyncSoloCatch() {
    let resultado = await Promise.reject(
        new Error("Error en la promesa rechazada")
    ).catch((error) => {
        console.log(error);
    });
    //console.log(resultado);
        
}

window.onload = function() {
    document.getElementById("btnAsync").addEventListener("click", AsyncSoloCatch); ;
}



        
