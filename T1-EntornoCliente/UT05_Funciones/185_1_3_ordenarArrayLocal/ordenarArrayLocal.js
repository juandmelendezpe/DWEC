function ordenarArrayLocalAnonima(){
    alert("Función no implementada");
    const palabras = ["Ñu", "Águila", "boa", "oso","marsopa","Nutria"];
    console.log(palabras);
    palabras.sort(function(a,b){
        return a.localeCompare(b);
    });
    console.log(palabras);
}

function ordenarArrayLocal(){
    alert("Función no implementada");

    const palabras = ["Ñu", "Águila", "boa", "oso","marsopa","Nutria"];
    console.log(palabras);
    palabras.sort((a,b) => a.localeCompare(b));
}


window.onload = function() {

document.getElementById("ordenarArrayLocal").addEventListener("click", ordenarArrayLocal);
document.getElementById("ordenarArrayLocalAnonima").addEventListener("click", ordenarArrayLocalAnonima);
}