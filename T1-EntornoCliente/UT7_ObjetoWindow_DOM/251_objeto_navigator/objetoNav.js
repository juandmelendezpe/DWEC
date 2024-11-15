function recuperarObjetoNavigator() {
    console.log("userAgent: -->" + navigator.userAgent);
    console.log(">---------------------------------------->" );
    console.log("cookieEnable: -->" + navigator.cookieEnabled);
    console.log(">---------------------------------------->" );

    console.log("geolocalizacion: -->" + navigator.geolocation);
    console.log(">---------------------------------------->" );

    console.log("language: -->" + navigator.language);
    console.log(">---------------------------------------->" );
    console.log("onLine: -->" + navigator.onLine);
    console.log(">---------------------------------------->" );
    console.log("storage : -->" + navigator.storage );

}
window.onload = function() {
    document.getElementById("objetoNavigator").addEventListener("click",recuperarObjetoNavigator);
}