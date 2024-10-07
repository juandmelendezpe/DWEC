function amarillo() {
    document.getElementById("amarillo").style.opacity = 0.5;
    setTimeout(function() {
        document.getElementById("amarillo").style.opacity = 1;
    }, 500);
    
}