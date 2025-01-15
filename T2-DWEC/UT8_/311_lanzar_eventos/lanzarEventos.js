window.onload = function() {
    let boton1 = document.getElementById("boton1"); // Seleccionamos el botón 1
    let boton2 = document.getElementById("boton2"); // Seleccionamos el botón 2 
    
    boton1.addEventListener("click", () => { // Añadimos un evento click al botón 1
        document.body.style.backgroundColor = "red"; // Cambiamos el color de fondo del body a rojo
    });
    
    boton2.addEventListener("click", () => { // Añadimos un evento click al botón 2
        let e1 = new Event("click"); // Creamos un evento de tipo click
        boton1.dispatchEvent(e1); // Lanzamos el evento click en el botón 1
    })
}