/*
make weather widget:
-make elements, which get city info from users - article weather
-get info from api(prepare them for request to server
-make request to server and get answer
-show result to user
 */

const API_BASE = ''
const API_KEY = ''

const btn = document.querySelector('.btn');
btn.addEventListener('click', buttonClickHandler);
function buttonClickHandler({target}) {
    const selectValue = target.previousElementSibling.value;
    requestAPI((selectValue));
}

function requestAPI(city) {
    //make request
    //prepare URL
    const url =  `${API_BASE}?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)  
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            displayWeather(data);
        })
    }
    function displayWeather(weatherData) {
    
    }
    
