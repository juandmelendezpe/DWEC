function EjecutarAsync() {
    let promesa1 = Promise.resolve("estoy en la promesa 1 , estoy resuelta");
    let promesa2 = new Promise((resolver)=>{
        setTimeout(()=>{resolver("estoy en la promesa 2 , estoy resuelta en 3s")},3000);
    });
    let promesa3 = new Promise((resolver)=>{
        setTimeout(()=>{resolver("estoy en la promesa 3 , estoy resuelta em 6s")},6000);
    });

    async function esperarTiempo(){
        let mensaje1 = await promesa1;
        console.log(mensaje1);
        let mensaje2 = await promesa2;
        console.log(mensaje2);
        let mensaje3 = await promesa3;
        console.log(mensaje3);
    }
    console.log("Inicio de la ejecución");
    esperarTiempo();
    console.log("Fin de la ejecución");
}


window.onload = function() {
    document.getElementById("btnAsync").addEventListener("click",EjecutarAsync);
    }
