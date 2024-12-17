function ejecutrarTryCatch() {
    try {
        console.log(e)   
        console.log("Hola");
    } catch (err) {
        console.log("Error: " + err.message);
        
    }
}


window.onload = function() {
    document.getElementById("TC").addEventListener("click",ejecutrarTryCatch);
}