let barras = document.getElementsByClassName("barras"); //Obtengo todas las barras
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function cambiarColor() {
    let color = "rgb(" + numeroAleatorio(0, 255) + "," + numeroAleatorio(0, 255) + "," + numeroAleatorio(0, 255) + ")";
    return color;
}
function cambiarAltura() {
    let altura = numeroAleatorio(1, 100);
    return altura;
}
function cambiarBarras() {
    for (let i = 0; i < barras.length; i++) {
        barras[i].style.backgroundColor = cambiarColor();
        barras[i].style.height = cambiarAltura() + "%";
    }
}
window.onload = function() {
    setInterval(cambiarBarras, 1000);
}