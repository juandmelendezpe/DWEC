
function anularComportPredeter() {
    document.getElementById("enlace").classList.add("anulado");
    let enlace = document.querySelector("a");
    enlace.addEventListener("click", function(ev) {
        if (!confirm("¿Realmente desea abandonar esta página?")) {
            ev.preventDefault();
        }
    })
}

window.onload = function() {
    document.getElementById("anularComportPredeter").addEventListener("click", anularComportPredeter);
}