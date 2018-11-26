
    var section = document.querySelector('section');
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
    var townInfo = request.response;
    showTownInfo(townInfo);
    }

    function showTownInfo(jsonObj) {
    var town = jsonObj['towns'];
      
    for (var i = 4; i < town.length; i++) {
        var myArticle = document.createElement('article');
        var myH1 = document.createElement('h1');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myList = document.createElement('ul');

        myH1.textContent = town[i].name;
        myH2.textContent = town[i].motto;
        myPara1.textContent = 'Year Founded: ' + town[i].yearFounded;
        myPara2.textContent = 'Population: ' + town[i].currentPopulation;
        myPara3.textContent = 'Anual Rain:' + town[i].averageRainfall;
        myPara4.textContent = 'Events:';
            
        var eventlist = town[i].events;
        for (var j = 0; j < eventlist.length; j++) {
        var listItem = document.createElement('ol');
        listItem.textContent = eventlist[j];
        myList.appendChild(listItem);
        }

        myArticle.appendChild(myH1);
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4)
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
        }
    }
