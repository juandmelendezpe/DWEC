function dinoVidas(i){
    document.getElementById(i.target.id).classList.toggle("dino_rojo");

}
function dinoEventos(){
    let elemento = document.getElementsByClassName("dino_verde");
    for(let i=0; i= elemento.length;i++){
        elemento[i].addEventListener("click", function(i){dinoVidas(i);});
    }
}

function rellenarImg(){

    const divs = document.querySelectorAll("#cuadro1 div");
    const numeros = Array.from({ length: 9 }, (_, i) => i + 1);
    numeros.sort(() => Math.random() - 0.5);
    
    divs.forEach((div, index) => {
      div.textContent = numeros[index];
    });
}


window.onload = function() {
   document.addEventListener("click",dinoEventos);
}