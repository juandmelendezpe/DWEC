
function recuperarObjetoLocation() {
    console.log("Protocolo: " + location.protocol);
    console.log("Host: " + location.host);
    console.log("Hostname: " + location.hostname);
    console.log("Port: " + location.port);
    console.log("Pathname: " + location.pathname);
    console.log("Search: " + location.search);
    console.log("Hash: " + location.hash);
    console.log("Href: " + location.href);
    console.log("Origin: " + location.origin);
    console.log("Password: " + location.password);
    console.log("Username: " + location.username);
    console.log("reload: " + location.reload);
    console.log("replace: " + location.replace);
}

window.onload = function() {
    document.getElementById("objetoLocation").addEventListener("click", recuperarObjetoLocation);
}