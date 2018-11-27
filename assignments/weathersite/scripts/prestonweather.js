
var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/group?id=5604473,5585010,5607916&units=imperial&appid=3db6051d8878aed3edde73d9c3b3c18d');
request.send();



    request.onload=function() {
        var jsonObj = JSON.parse(request.responseText);
        var pi = 0;
        if(document.URL.indexOf("fishhaven.html") >= 0)
            { pi = 1; }
        else if (document.URL.indexOf("sodasprings.html") >= 0)
            { pi = 2;}
        else 
            { pi = 0; }


    
        document.getElementById("currTown").innerText =  jsonObj.list[pi].name;
        document.getElementById("currCon").innerText =  jsonObj.list[pi].weather[0].main;
        //set icon
        imgCreate(jsonObj.list[pi].weather[0].icon);

        document.getElementById("currTemp").innerHTML =  jsonObj.list[pi].main.temp.toFixed(0);
        document.getElementById("currHum").innerHTML =  jsonObj.list[pi].main.humidity;
        document.getElementById("currWind").innerHTML =  jsonObj.list[pi].wind.speed;
        document.getElementById("currPer").innerHTML =  jsonObj.list[pi].rain[0];
        document.getElementById("windChillTemp").innerHTML =  windChill(jsonObj.list[pi].main.temp, jsonObj.list[pi].wind.speed);
            
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