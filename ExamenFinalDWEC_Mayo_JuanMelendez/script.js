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
    function ocultarFigura(){
          var cont = 0 ;
    var temp = setInterval(
        function(){
            if(cont >=6){
                clearInterval(temp)
                document.getElementById(secuencia).classList.add("trasparente");
                document.getElementById(posicion).classList.add("trasparente");
            }else{
                document.getElementById(posicion).classList.toggle("ocultar");
                cont++;
            }
        },750);

    }
   
    function cargarCompleto(){
        alert("hoola");
        console.log("error");

        /*let cuadroImagenes = document.getElementsByClassName("imgCelda");
        cuadroImagenes.forEach((img)=>{
            img.classList.add("mostrar");
            img.classList.toggle("ocultar");
        }*/
    }
window.onload = function() {
    cargarImagenes();
    let btnCargarCompleta = document.getElementById("naranja")
    btnCargarCompleta.addEventListener("click",cargarCompleto);
    
}