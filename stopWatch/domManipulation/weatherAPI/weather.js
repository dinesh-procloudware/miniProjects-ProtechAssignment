var cityName = document.getElementsByClassName('cityName')[0];
var latitudeValue = document.getElementsByClassName("latitudeValue")[0];
var longitudeValue = document.getElementsByClassName("longitudeValue")[0];
var country = document.getElementsByClassName("country")[0];
var population = document.getElementsByClassName("population")[0];
var mainContainer = document.getElementsByClassName("mainContainer");
var main = document.getElementById("main");
var text = document.getElementsByClassName("text");
var cards = document.getElementsByClassName("cards")[0];
window.addEventListener("load", () => {
    let long;
    let lag;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            lat_long = "lat=" + `${lat}` + "&lon=" + `${long}`;
            const api = 'https://api.openweathermap.org/data/2.5/forecast/daily?' + lat_long + '&appid=a51fb660edcce864cac526abb9967d7f';
            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then(data => {
                    upperContent(data);
                    data.list.forEach((i, index) => {
                        userInfo(i, index);
                    });
                })
        })
    }
})

function dateTime(index) {
    let curr = new Date();
    curr.setDate(curr.getDate() + index);
    return curr.toLocaleString();
}

function upperContent(data) {
    cityName.innerHTML = data.city.name;
    latitudeValue.innerHTML = "Langitude:" + data.city.coord.lat;
    longitudeValue.innerHTML = "Longitude:" + data.city.coord.lon;
    country.innerHTML = "Country:" + data.city.country;
    population.innerHTML = "Population:" + data.city.population;
}

function userInfo(i, index) {
    var main = document.createElement("div");
    main.classList.add("main");
    var date = document.createElement("h5");
    date.classList.add("heading");
    var sub = document.createElement("div");
    var imgTxt = document.createElement("div");
    imgTxt.classList.add("imgTxt");
    var left = document.createElement("div");
    left.classList.add("left");
    var imgHumidity = document.createElement("img");
    imgHumidity.classList.add("img");
    var left1 = document.createElement("div");
    left1.classList.add("left");
    var imgWeather = document.createElement("img");
    imgWeather.classList.add("img");
    var left2 = document.createElement("div");
    left2.classList.add("left");
    var imgSunrise = document.createElement("img");
    imgSunrise.classList.add("img");
    var right = document.createElement("div");
    right.classList.add("right");
    var imgTemp = document.createElement("img");
    imgTemp.classList.add("img");
    var right1 = document.createElement("div");
    right1.classList.add("right");
    var imgCloud = document.createElement("img");
    imgCloud.classList.add("img");
    var right2 = document.createElement("div");
    right2.classList.add("right");
    var imgSunSet = document.createElement("img");
    imgSunSet.classList.add("img");
    var humid = document.createElement('span');
    var weather = document.createElement('span');
    var sunrise = document.createElement('span');
    var temp = document.createElement('span');
    var sunset = document.createElement('span');
    var clouds = document.createElement('span');

    date.innerHTML = dateTime(index).split(",     ")[0];

    imgHumidity.src = '../weatherAPI/weather/humidity.svg';
    humid.innerHTML = i.humidity + "%";
    imgWeather.src = '../weatherAPI/weather/weather.svg';
    weather.innerHTML = i.weather[0].main;
    imgSunrise.src = '../weatherAPI/weather/sunrise.svg';
    sunrise.innerHTML = i.sunrise;
    imgTemp.src = '../weatherAPI/weather/temp.svg';
    temp.innerHTML = i.temp.day + " degree";
    imgSunSet.src = "../weatherAPI/weather/sunset.svg";
    sunset.innerHTML = i.sunset;
    imgCloud.src = "../weatherAPI/weather/clouds.svg";
    clouds.innerHTML = i.clouds + "%";

    cards.appendChild(main);
    main.appendChild(date);
    main.appendChild(sub);
    sub.appendChild(imgTxt);

    imgTxt.appendChild(left);
    left.appendChild(imgHumidity);
    left.appendChild(humid);
    left.appendChild(left1);
    left1.appendChild(imgWeather);
    left1.appendChild(weather);
    left1.appendChild(left2);
    left2.appendChild(imgSunrise);
    left2.appendChild(sunrise);

    imgTxt.appendChild(right);
    right.appendChild(imgTemp);
    right.appendChild(temp);
    right.appendChild(right1);
    right1.appendChild(imgCloud);
    right1.appendChild(clouds);
    right1.appendChild(right2);
    right2.appendChild(imgSunSet);
    right2.appendChild(sunset);
    document.body.append(cards);
}