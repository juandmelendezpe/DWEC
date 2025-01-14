
function promiseAll() {
    let promise1 = new Promise.resolver("estoy en la promesa 1");
    let promise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("estoy en la promesa 2");
        }, 2000);
    });
    let promise3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("estoy en la promesa 3");
        }, 3000);
    });
    let promesaConjunta = Promise.all([promise1, promise2, promise3]);
    console.log("empezamos");
    promesaConjunta.then((values) => {
        console.log(values);
    });
    console.log("terminamos");
    




}

window.onload = function() {
    document.getElementById("btnPromise").addEventListener("click", promiseAll);
}