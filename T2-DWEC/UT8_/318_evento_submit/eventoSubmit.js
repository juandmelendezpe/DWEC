// Date: 2021/05/24
window.onload = function() {
    let formulario = document.forms[0];
    let tUsuario = document.getElementById("usuario");
    let cMensaje = document.getElementById("mensaje");

   formulario.addEventListener("submit", function(event) {
        if (tUsuario.value === "" ) {
            alert("Debe rellenar todos los campos");
            event.preventDefault();
        }
    });
        cMensaje.textContent = "dato obtenido: " + tUsuario.value;
        console.log("dato obtenido: " + tUsuario.value);

}