/*
make weather widget:
-make elements, which get city info from users - article weather
-get info from api(prepare them for request to server
-make request to server and get answer
-show result to user
 */


const API_KEY = 'f7c576ba3699bdd0b98ddcf196639992';
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';


const btn = document.querySelector('.btn');
btn.addEventListener('click', buttonClickHandler);

function buttonClickHandler({target}) {
    const selectValue = target.previousElementSibling.value;
    requestAPI((selectValue));
}

function requestAPI(city) {
    //make request
    //prepare URL
    const url = `${API_BASE}?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            displayWeather(data);
        })
}

function displayWeather(weatherData) {
    const {name, main: {temp, pressure}, weather: {description}, wind: {speed}} = weatherData;

    const article = document.createElement('article');
    
    const city = document.createElement('p');
    city.append('city:', name);
    
    const temperature = document.createElement('p');
    temperature.append('temperatur:', temp);
    
    const press = document.createElement('p');
    press.append('pressure:', pressure);
    
    const wind = document.createElement('p');
    wind.append('wind:', speed);

    article.append(city, temperature, pressure, wind);
    
    
    const section = document.querySelector('.wrapper');
    section.append(article);
}
    
