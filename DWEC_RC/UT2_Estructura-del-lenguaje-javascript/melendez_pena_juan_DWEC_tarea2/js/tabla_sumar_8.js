function resultadoSuma(){
    let numero = parseInt(document.getElementById('numero').value) ;
    let resultado = "" ;
    if(numero == 8){
        let i = 1 ;
        while ( i <= 10){
            resultado += `<p>${numero} + ${i} = ${numero + i}</p>` ;
            i++ ;
        }
                document.getElementById('resultado').innerHTML =`<h2>Tabla de sumar: ${numero}</h2>` + resultado ;
    } else {
        alert('Por favor ingrese el número 8') ;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('procesar').addEventListener('click', resultadoSuma) ;
}) ;

//