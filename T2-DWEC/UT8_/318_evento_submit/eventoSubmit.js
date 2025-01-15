window.onload = function() {
    let formulario = document.forms[0];
    let tUsuario = document.getElementById("usuario");
    let cMensaje = document.getElementById("mensaje");

   formulario.addEventListener("submit", function(event) {
        if (tUsuario.value === "" ) {
            alert("Debe rellenar todos los campos");
            event.preventDefault();
        }
        cMensaje.textContent = "dato obtenido: " + tUsuario.value;
        let div = document.setElement("div");
        div.appendChild(cMensaje);
        document.body.appendChild(div);
        
    });

        document.getElementById("btn").addEventListener("click", function() {
            if(confirm("¿Estás seguro de crear otro elemneto buton?")) {
                let boton = document.createElement("button");
                boton.textContent = "Botón creado";
                document.body.appendChild(boton);
            }

        });
}