function recuperarWindow(){
    localStorage.setItem('miGato','Juan');
    console.log('innerHeight: '+window.innerHeight);
    console.log('innerWidth: '+window.innerWidth);
    console.log('outerHeight: '+window.outerHeight);
    console.log('outerWidth: '+window.outerWidth);
    console.log('screenX: '+window.screenX);
    console.log('screenY: '+window.screenY);
    console.log('screenLeft: '+window.screenLeft);
    console.log('screenTop: '+window.screenTop);
    console.log('scrollX: '+window.scrollX);
    console.log('scrollY: '+window.scrollY);
    console.log('console: '+window.console);
    console.log('fullScreen:' + window.fullScreen);
    console.log('localStorage: '+ window.localStorage);
    console.log('texto seleccionado: '+window.getSelection().toString());
    console.log('propiedades:'+window.find('propiedades'));
    console.log('getComputedStyle: '+window.getComputedStyle(document.getElementById('propiedadesWindow')));
    
    

}
window.onload = function() {
    document.getElementById("propiedadesWindow").addEventListener("click",recuperarWindow)
}