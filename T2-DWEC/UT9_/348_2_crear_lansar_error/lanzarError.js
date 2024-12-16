function lanzarError() {
    var error = new Error("Error lanzado por el usuario");
    throw error;
}

window.onload = function() {
    document.getElementById("CrearError").addEventListener("click",lanzarError);
}