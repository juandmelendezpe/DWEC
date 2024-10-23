function ordenarArrayLocalParametro(){
    alert("Función implementada");
    const palabras = ["Ñu", "Águila", "boa", "oso","marsopa","Nutria"];
    console.log(palabras);

    palabras.sort((a,b)=>a.localeCompare(b,"es"));
    console.log(palabras);
}


window.onload = function() {

document.getElementById("ordenarArrayLocalParametro").addEventListener("click", ordenarArrayLocalParametro);
}