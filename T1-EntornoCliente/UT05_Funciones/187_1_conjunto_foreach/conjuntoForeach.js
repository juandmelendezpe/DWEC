function conjuntoForeach(){
    let conjunto = new Set();
    conjunto.add("Paul").add("Ringo").add("George").add("Jonh");

    conjunto.forEach(function(valor){
        console.log(valor);
     
    });
}
window.onload = function(){
    document.getElementById("conjuntoForeach").addEventListener("click",conjuntoForeach);

}