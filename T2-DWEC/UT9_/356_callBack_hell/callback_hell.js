function cargarImagen(componente, callback) {
    alert("Cargando imagen");
    let carga = false;
    if(carga== true){
        componente.setAtribute("src","imgSinColorear.jpg");
        console.log("Imagen cargada");
        return callback(false);
    }else{
        console.log("Error al cargar la imagen");
        return callback(true);
    }
}
function colorearImagen(componente, callback) {
    alert("Coloreando imagen");
    let carga = false;
    if(carga== true){
        componente.setAtribute("src","imgColoreada.jpg");
        console.log("Imagen coloreada");
        return callback(false);
    }else{
        console.log("Error al colorear la imagen");
        return callback(true);
    }
}
function animar(componente) {
    alert("Animando imagen");
    componente.classList.add("animar");
    console.log("Animando imagen");

   
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
                )
            }
        }
        )
    }
    )
};