let altura = 3;
// craer una funcion que al hacer click en el boton muestre la figura seleccionada

// crear una funcion que muestre la figura seleccionada



function mostrarFigura(){
    let figura = document.getElementById("figura").value;
    switch(figura){
        case "cuadros":
            cuadros(altura);
            break;
        case "triangle":
            triangle(altura);
            break;
        case "rectangulo":
            rectangulo(altura);
        default:
            alert("No has seleccionado ninguna figura");
    }
}
function cuadros(n){
    let n;
    do{
        n = prompt("Escribe el número de asteriscos que deseas " +
        "(debe de ser un número entero positivo)");
    }while(isNaN(Number(n)) || n<=0);
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            document.write("* ");
        }
        document.write("<br>");
    }
}
function rectangulo(n){
    let n;
    do{
        n = prompt("Escribe el número de asteriscos que deseas " +
        "(debe de ser un número entero positivo)");
    }while(isNaN(Number(n)) || n<=0);
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            document.write("* ");
        }
        document.write("<br>");
    }
}

function triangle(n){
let n;
do{
n=prompt("Escribe el número de asteriscos que deseas " +
"(debe de ser un número entero positivo)");
}while(isNaN(Number(n)) || n<=0);
for(let i=l;i <=n;i++){
for(let j=l;j<=i;j++){
document.write("* ");
}
document.write("<br>");
}
}
window.onload = function(){
document.getElementById("mostrarFigura").
addEventListener("click", mostrarFigura);
}
// Compare this snippet from T1-EntornoCliente/UT05_Funciones/tarea_cuadros/cuadros.html:
