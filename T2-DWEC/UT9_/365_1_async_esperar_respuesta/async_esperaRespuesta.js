async function EjecutarAsyncRespuesta() {
   let mensaje1 =await Promise.resolve("Estoy resulta");
   console.log(mensaje1);
   let mensaje2 =await new Promise((resolver) => {
      setTimeout(() => {resolver("resulevo en 2s")}, 2000);
    });
    console.log(mensaje2);
    let mensaje3 = await new Promise((resolver) => {
        setTimeout(() => {resolver("resulevo en 3s")}, 3000);
        }
    );
    console.log(mensaje3);
}   


window.onload = function() {
    document.getElementById("btnAsync").addEventListener("click",EjecutarAsyncRespuesta);
}