function grabarLeerCookie() {
document.cookie = "nombre=Juan; SameSite=Strict";
console.log(document.cookie);
document.cookie = "apellido=Perez; SameSite=Strict";
console.log(document.cookie);
document.cookie = "usuarioDos=sunday; SameSite=Strict";
console.log(document.cookie);
}

function recuperarCokies() {
    let arrayCookies = document.cookie.split(";");
    for(const cookie of arrayCookies) {
        let [nombre, valor] = cookie.split("=");
        console.log(`La Cookie : "${nombre}" tiene el valor: "${valor}"`);
    }
}

function expiracionCookies() {
    let hoy = new Date();
    let expiracion = hoy.getTime() + 1000 * 60 * 60 * 24 * 7;
    let fechaExpiracion = new Date(expiracion);
    console.log("------>" + fechaExpiracion);
    document.cookie = `nombre=Juan; expires=${fechaExpiracion.toUTCString()}; SameSite=Strict`;
    console.log(document.cookie);
    
}
function borrarcookies() {
    document.cookie = "usuarioDos=Juan; expires=Thu, 01 Jan 2000 00:00:00 UTC; SameSite=Strict";
    console.log(document.cookie);
}   

window.onload = function() {
    document.getElementById("crearCokies").addEventListener("click",grabarLeerCookie);
    document.getElementById("recuperarCokies").addEventListener("click",recuperarCokies);
    document.getElementById("expiracionCookies").addEventListener("click",expiracionCookies);
    document.getElementById("borrarcookies").addEventListener("click",borrarcookies);

}