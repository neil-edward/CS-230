var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/group?id=4255466,5596475,4366164,5771960&units=imperial&appid=3db6051d8878aed3edde73d9c3b3c18d');
request.send();



    request.onload=function() {
        var jsonObj = JSON.parse(request.responseText);


        

        //DC
        document.getElementById("currCon2").innerText =  jsonObj.list[2].weather[0].main;
        //set icon
        //imgCreate(jsonObj.list[2].weather[0].icon);
        document.getElementById("currTemp2").innerHTML =  jsonObj.list[2].main.temp.toFixed(0);

    }