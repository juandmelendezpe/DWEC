let libro = {
    título : "Manual de UFOlogía",
    autores : [ "Pedro Martínez","Ana León"],
    //Esta propiedad es un array
    editorial : { //La editorial es otro objeto
                nombre : "Inexistente S.A.",
                país : "España"
    },
    ArrayUno:['uno','Dos'],
    ArrayDos:new Array('hola','hola'),
    map : new Map([1,"Jose"],[2,"Maria"],[3,"Elena"]),
    set : new Set([1,2,3,4,5,6,7])
    };
    console.log(libro.título);
    console.log(libro['n-serie']);
    console.log(libro.editorial.nombre);
    console.log(libro.ArrayUno);
    console.log(libro.ArrayDos);

    window.onload = function(){
        document.getElementById("objetoComillas").addEventListener("click",crearObjetoEnterCominllas);
    }

