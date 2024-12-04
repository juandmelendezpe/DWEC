function crearCokies() {
document.cookie = "nombre=Juan; SameSite=Strict";
console.log(document.cookie);
document.cookie = "apellido=Perez; SameSite=Strict";
console.log(document.cookie);
}

function recuperarCokies() {
    let arrayCookies = document.cookie.split(";");
    console.log(arrayCookies);
    let arrayCookies2 = document.cookie.split(";");
    console.log(arrayCookies2);

}

function expiracionCookies() {
    let fecha = new Date();
    fecha.setMonth(fecha.getMonth()+1);
    document.cookie = "nombre=Juan;expires="+fecha.toUTCString();
    console.log(document.cookie);
    document.cookie = "apellido=Perez;expires="+fecha.toUTCString();
    console.log(document.cookie);
}

window.onload = function() {
    document.getElementById("crearCokies").addEventListener("click",crearCokies);
    document.getElementById("recuperarCokies").addEventListener("click",recuperarCokies);
    document.getElementById("expiracionCookies").addEventListener("click",expiracionCookies);
}