function windChill() {
    var t = 76;
    var s = Math.pow(5, 0.16);
    var f = (35.74 + (0.6215 * t) - (35.75 * s) + (0.4275 * (t * s)));
    
    document.getElementById("windChillTemp").innerHTML = Math.round(f);
}