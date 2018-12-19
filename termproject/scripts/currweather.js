var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/group?id=4255466,5596475,4366164,5771960&units=imperial&appid=3db6051d8878aed3edde73d9c3b3c18d');
request.send();



    request.onload=function() {
        var jsonObj = JSON.parse(request.responseText);


        //Indianna
        document.getElementById("currCon0").innerText =  jsonObj.list[0].weather[0].main;
        //set icon
        //imgCreate(jsonObj.list[0].weather[0].icon);
        document.getElementById("currTemp0").innerHTML =  jsonObj.list[0].main.temp.toFixed(0);

        //Idaho
        document.getElementById("currCon1").innerText =  jsonObj.list[1].weather[0].main;
        //set icon
        //imgCreate(jsonObj.list[1].weather[0].icon);
        document.getElementById("currTemp1").innerHTML =  jsonObj.list[1].main.temp.toFixed(0);

        //DC
        document.getElementById("currCon2").innerText =  jsonObj.list[2].weather[0].main;
        //set icon
        //imgCreate(jsonObj.list[2].weather[0].icon);
        document.getElementById("currTemp2").innerHTML =  jsonObj.list[2].main.temp.toFixed(0);

        //Utah
        document.getElementById("currCon3").innerText =  jsonObj.list[3].weather[0].main;
        //set icon
        //imgCreate(jsonObj.list[3].weather[0].icon);
        document.getElementById("currTemp3").innerHTML =  jsonObj.list[3].main.temp.toFixed(0);

    }