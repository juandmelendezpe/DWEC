function ejecutarExec() {
    let texto ="este es un texto de prueba";
    
    //let expresion = /\w+/; //w+ busca palabras
    let expresion = /un/; // busca palabras "un"

    let resultado = expresion.exec(texto);
    console.log(resultado); //muestra EL ARRAY COMPLETO
    console.log(resultado[0]); // 1 CONCIDENCIA. QUE ES LA COMPLETA  "este"
    
}

window.onload = function() {
    document.getElementById("ejecutarExec").addEventListener("click",ejecutarExec);
}