async function EjecutarAsync() {
    let texto =  await "Ya estamos aquí";
    console.log(texto);
}

window.onload = function() {
    document.getElementById("btnAsync").addEventListener("click",EjecutarAsync);
}