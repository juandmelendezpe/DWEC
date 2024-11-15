function recuperarObjetoScreen() {
    // screen pertenece al objeto window
    //console.log(window.screen.availHeight);
    console.log("availTop :" + screen.availTop);
    console.log("availLeft :" + screen.availLeft);
    console.log("availWidth :" + screen.availWidth);
    console.log("availHeight :" + screen.availHeight);
    console.log("colorDepth :" + screen.colorDepth);
    console.log("height :" + screen.height);
    console.log("width :" + screen.width);
    console.log("orientacion :" + screen.orientation.type);
    console.log("pixelDepth :" + screen.pixelDepth);
}
    

window.onload = function() {
    document.getElementById("screen").addEventListener("click", recuperarObjetoScreen);
}