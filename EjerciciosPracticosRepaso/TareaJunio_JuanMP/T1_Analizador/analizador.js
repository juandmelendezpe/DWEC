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
    // Cambia  la altura de cada barra
   // let barras = document.getElementsByClassName("barras"); //Obtengo todas las barras
    let barras = document.querySelectorAll(".barras"); // Obtengo todas las barras
   for (let i = 1; i < barras.length; i++) {
        let barra = barras[i]; // Obtengo la barra
        let altura = cambiarAltura(); // Cambia la altura de la barra
        barra.style.height = altura + "%"; // Cambia la altura de la barra
    }
    for (let i = 1; i < barras.length; i++) {
        let barra = barras[i]; // Obtengo la barra
        let color = cambiarColor(); // Cambia el color de la barra
        barra.style.backgroundColor = color; // Cambia el color de la barra
    }
      
}
window.onload = function() {
    setInterval(cambiarBarras, 1000);
}