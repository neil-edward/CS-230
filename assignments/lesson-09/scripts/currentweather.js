
var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3db6051d8878aed3edde73d9c3b3c18d');
request.send();



    request.onload=function() {
        var jsonObj = JSON.parse(request.responseText);
        
        document.getElementById("currCon").innerText =  jsonObj.weather[0].main;
        //set icon
        imgCreate(jsonObj.weather[0].icon);

        document.getElementById("currTemp").innerHTML =  jsonObj.main.temp.toFixed(0);
        document.getElementById("currHum").innerHTML =  jsonObj.main.humidity;
        document.getElementById("currWind").innerHTML =  jsonObj.wind.speed;
        document.getElementById("currPer").innerHTML =  jsonObj.rain[0];
        document.getElementById("windChillTemp").innerHTML =  windChill(jsonObj.main.temp, jsonObj.wind.speed);
            
    }
    
    function windChill(t , w) {
   
        var s = Math.pow(w, 0.16);
        var f = (35.74 + (0.6215 * t) - (35.75 * s) + (0.4275 * (t * s)));
        return f.toFixed(0);
    }

    function imgCreate(WIcon) {
        var src = document.getElementById("currIcon");
        var img = document.createElement("img");
        img.src = "http://openweathermap.org/img/w/" + WIcon + ".png";
        img.alt = "current weather icon"
        
        src.appendChild(img);
    }