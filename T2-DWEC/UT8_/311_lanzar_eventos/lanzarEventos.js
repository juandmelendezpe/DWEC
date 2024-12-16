window.onload = function() {
    let boton1 = document.getElementById("boton1");
    let boton2 = document.getElementById("boton2");
    
    boton1.addEventListener("click", () => {
        document.body.style.backgroundColor = "red";
    });
    
    boton2.addEventListener("click", () => {
        let e1 = new Event("click");
        boton1.dispatchEvent(e1);
    })
}