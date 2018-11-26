
    function windChill() {
   
    var t = document.getElementById("currTemp").innerHTML;
    var s = Math.pow(document.getElementById("currWind").innerHTML, 0.16);
    var f = (35.74 + (0.6215 * t) - (35.75 * s) + (0.4275 * (t * s)));
    document.getElementById("windChillTemp").innerHTML = Math.round(f) + ' &deg;' +"F";
}