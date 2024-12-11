function mensaje() {
    alert("me has echo click");
    let p = document.getElementById("anularEvento");
    p.removeEventListener("click",mensaje);
   
}
window.onload = function() {
    document.getElementById("anularEventos").addEventListener("click",mensaje)
}