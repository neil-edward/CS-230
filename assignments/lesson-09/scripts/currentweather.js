var requestURL = 'api.openweathermap.org/data/2.5/weather?id=5604473&APPID=3db6051d8878aed3edde73d9c3b3c18d';

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();


