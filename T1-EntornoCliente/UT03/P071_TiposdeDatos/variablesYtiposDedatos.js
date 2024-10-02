function tipoDatos(){
    /***************** TIPOS DE DATOS PRIMITIVOS*/ 

    console.log("Undefined: " + typeof nada);
    console.log("Boolean: " + typeof true);
    console.log("Number: " + typeof 1);
    console.log("String: " + typeof "cadenaTexto");
    console.log("BigInt:" + typeof 1n);
    console.log("Symbol: " + typeof Symbol("valorUnido"));
    console.log("Null: " + typeof null);

    /***************** TIPOS DE DATOS NO PRIMITIVOS*/ 
    console.log("Object: " + typeof {});
    console.log("Array: " + typeof []);
    console.log("Map: " + typeof new Map());
    console.log("Set: " + typeof new Set());
    console.log("WeakMap: " + typeof new WeakMap());
    console.log("WeakSet: " + typeof new WeakSet());
    console.log("Date: " + typeof new Date());
    console.log("Function: " + typeof function(){});

    let 

}
window.onload = function(){
    document.getElementById("tiposDatos").addEventListener("click", tipoDatos);
}