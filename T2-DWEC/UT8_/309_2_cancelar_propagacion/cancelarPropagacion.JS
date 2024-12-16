
window.onload = function() {
    let boton = document.querySelector("button");
    let div = document.querySelector("div");
    boton.addEventListener("click", (ev) => {
        document.body.style.background = "green";
        ev.stopPropagation();
    });
    div.addEventListener("click", () => {
        document.body.style.backgroundColor = "red";
    });
}