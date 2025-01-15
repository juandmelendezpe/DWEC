async function EjecutarAsync() {
    try{
        let resultado= await Promise.reject(Error("Promesa rechazada"));

    }catch(error){
        console.log("Error capturado: "+error.message);
    }
    
}


window.onload = function() {
    document.getElementById("btnAsync").addEventListener("click",EjecutarAsync);
}