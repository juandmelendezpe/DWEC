 function jsonAJavaScript() {
    const estructura = '{' 
    + '"nombre": "Juan",'
    + '"apellidos": "García",'
    + '"edad": 25,'
    + '"dirección": {'
    + '"calle": "Calle Mayor",'
    + '"número": 7,'
    + '"piso": 1,'
    + '"puerta": "A"'
    + '},'
    + '"amigos": ["Pedro", "Ana", "Luis"],'
    + '"pais": "España"'
    + '}';
    
    alert(estructura);
    console.log(estructura);
    console.log("****************************************");
    const obj = JSON.parse(estructura);
    console.log(obj.nombre);
    console.log(obj.apellidos);
    console.log(obj.edad);
    console.log(obj.dirección.calle);
    console.log(obj.dirección.número);
    console.log(obj.dirección.piso);
    console.log(obj.dirección.puerta);
    console.log(obj.amigos[0]);
    console.log(obj.amigos[1]);
    console.log(obj.amigos[2]);
    console.log(obj.pais);
 }
function javaScriptAJson() {
    const musico1 = {
        "nombre": "John",
        "apellidos": "Lennon",
        "edad": 40,
        "instrumentos": ["Guitarra", "Piano", "Batería"],
        "canciones": ["Imagine", "Let it be", "Help"]
    };
    console.log(musico1);
    console.log("****************************************");
    const json = JSON.stringify(musico1);
    console.log(json);
    alert(json);
}

window.onload = function() {
    document.getElementById('boton1').addEventListener('click', jsonAJavaScript);
    document.getElementById("boton2").addEventListener("click", javaScriptAJson);    
}