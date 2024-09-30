function rellenarCubo (lado) {
    let valor ;
    // rellenar el cubo con un valor aletorio del 1 al p
    for (let i = 0; i < lado; i++) {
        for (let j = 0; j < lado; j++) {
            for (let k = 0; k < lado; k++) {
                valor = Math.floor(Math.random() * lado) + 1;
                console.log(`Celda (${i},${j},${k}) = ${valor}`);
            }
        }
    }
}