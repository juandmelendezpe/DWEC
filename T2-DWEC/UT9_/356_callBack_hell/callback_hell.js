function cargarImagen(componente, callback) {
    alert("Cargando imagen...");
    let carga = true;
    if(carga== true){
        componente.setAttribute("src","imgSinColor.jpg"); 
        console.log("Imagen ...cargada");
        return callback(false);
    }else{
        console.log("...Error al cargar la imagen");
        return callback(true);
    }
}
function colorearImagen(componente, callback) {
    alert("Coloreando imagen...");
    let color = true;
    if(color== true){
        componente.setAttribute("src","imgColor.jpg");
        console.log("Imagen coloreada");
        return callback(false);
    }else{
        console.log("...Error al colorear la imagen");
        return callback(true);
    }
}
function animar(componente) {
    alert("Animando imagen...");
    componente.classList.add("animarComponente");
    console.log("...imagen animada ");
}

window.onload = function() {
    
    let boton = document.getElementById("boton");

    boton.addEventListener("click", function() {
        let componente = document.getElementById("mapa");
        cargarImagen(componente,function(error){
            if(error){
                console.log("___Error al cargar la imagen__");
            }else{
                colorearImagen(componente,function(error){
                    if(error){
                        console.log("Error al colorear la imagen");
                    }else{
                        animar(componente);
                    }
                }
                );
            }
        }
        )
    });

}