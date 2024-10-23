function arrayForeach(){
    const notas=[5,6,,,,9,,,8,,9,,7,8];
    notas.forEach(function(nota,i){
       // console.log("Nota "+(i+1)+": "+nota);
       console.log(`Nota ${i}: "es" ${nota}`);
    });
}

window.onload = function(){
    document.getElementById("EjecutarArrayForeach").addEventListener("click", arrayForeach);
}

