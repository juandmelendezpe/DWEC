function ordenPersonal(){
    const palabras = ["hola", "noches"]; //Array de palabras
    console.log(palabras);
    palabras.sort((a,b) => a.length - b.length); //Ordena el array de palabras por la longitud de las palabras
    console.log(palabras.length); //Muestra la longitud del array
    console.log(palabras); //Muestra el array ordenado
}

window.onload = function(){
    document.getElementById("btn-ordenar").addEventListener("click", ordenPersonal);

}