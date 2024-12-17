function ejecutrarTryCatch() {
    try {
        console.log("Ejecutando el try");
        console.log("Lanzando un error");
    } catch (error) {
       
        let mensaje = "Error capturado: " + error.message;
        console.log(mensaje);
    }finally {
        console.log("Ejecutando el finally");
}
}

function ejecutarTryCatchOk () {
    let e = 12;
    try {
        console.log(e);
        console.log("aqui si llega");
    }catch (error){
        let e = 1;
        console.log(e);
    }finally {
        console.log("Ejecutando el finally siempre");
    }
}


window.onload = function() {
    document.getElementById("ejecutarTC").addEventListener("click",ejecutrarTryCatch);
    document.getElementById("ejecutarTCok").addEventListener("click",ejecutarTryCatchOk);
}