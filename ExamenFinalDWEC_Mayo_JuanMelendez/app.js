const secuencia =["circuloVerde","cuadradoAzul","cuadradoAzul","trianguloRojo"];
const figuras= ["pentagonoAmarillo","cuadradoAzul","circuloVerde","trianguloRojo",
    "trianguloRojo","circuloVerde",
    "pentagonoAmarillo","cuadradoAzul","cuadradoAzul","pentagonoAmarillo",
    "trianguloRojo","circuloVerde","circuloVerde"
    ,"trianguloRojo","cuadradoAzul","pentagonoAmarillo"];
    
    function devolverNumero(minimo, maximo) {
        return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    }
    
    function idFiguraPanelControl (id){
        let valorElemento =id.target.id;
        alert("la figura tiene id :" +valorElemento);

    }
    function cargarSecuencia(){
        const secuencia =["circuloVerde","cuadradoAzul","cuadradoAzul","trianguloRojo"];



    }
    function cargarImagenes(){
     const posiciones = document.getElementsByClassName("imgCelda");
    const posicionesUsadas = new Set();
    Array.from(posiciones).forEach(posicion => {
        const id = posicion.id;
        if (!posicionesUsadas.has(id)) {
            let nombreImg ="./imagenes/"+figuras[devolverNumero(0, figuras.length - 1)]+".png";
            posicion.setAttribute("src",nombreImg );
        }
    });


    }
    
    function cargarCompleto(){
       const posiciones = document.getElementsByClassName("imgCelda");
       Array.from(posiciones).forEach((img)=>{
            img.classList.add("mostrar");
            img.classList.toggle("ocultar");
            img.classList.remove("ocultar");
        });
    }
     
    function cargarCompletoFila1() {
  let fila1 = ["1","2","3","4"];
         for(let i = 1  ; i < fila1.length;i++){
            let id = fila1[i];
            let img = document.getElementById(id);
            img.classList.remove("ocultar");
            img.classList.add("mostrar");
         }
}
window.onload = function() {
    cargarImagenes();
    let btnCargarCompleta = document.getElementById("naranja")
    
    btnCargarCompleta.addEventListener("click",cargarCompleto);

    let btnCargarCompletaFila1 = document.getElementById("rosa")
    
    btnCargarCompletaFila1.addEventListener("click",cargarCompletoFila1);

   
    
}