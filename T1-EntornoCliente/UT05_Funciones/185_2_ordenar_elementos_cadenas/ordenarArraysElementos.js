function ordenPersonal(){
    const palabras = ["hola", "adios", "buenos dias", "buenas noches"];
    console.log(palabras);
    palabras.sort((a, b)=>a.length - b.length);
    console.log(palabras);
        
}

window.onload = function(){
    documento.getElementById("ordenarArrayLongitud").addEventListener("click", ordenPersonal);

}