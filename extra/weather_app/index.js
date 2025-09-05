const weatherForm = document.querySelector('.weather-form');
const cityInput = document.querySelector('.city-input');
const card = document.querySelector('.card');
const apiKey = "Use your API KEY from OpenWeatherMap Here!";

weatherForm.addEventListener('submit', async event => {
    
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch (error) {
            console.error(error);
            displayError(error);
        }
    }
    else {
        displayError("Please enter a city name.");
    }

});

async function getWeatherData(city) {
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error('Could not fetch data for the city!');
    }

    return await response.json();
}

function displayWeatherInfo(data) {
    
    const {name: city,
           main: {temp, humidity},
           weather: [{description, id}]
          } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("city-display");
    tempDisplay.classList.add("temp-display");
    humidityDisplay.classList.add("humidity-display");
    descDisplay.classList.add("desc-display");
    weatherEmoji.classList.add("weather-emoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
    if (weatherId >= 200 && weatherId < 300) {
        return "⛈️";
    } else if (weatherId >= 300 && weatherId < 400) {
        return "🌦️";
    } else if (weatherId >= 500 && weatherId < 600) {
        return "🌧️";
    } else if (weatherId >= 600 && weatherId < 700) {
        return "❄️";
    } else if (weatherId >= 700 && weatherId < 800) {
        return "🌫️";
    } else if (weatherId === 800) {
        return "☀️";
    } else if (weatherId > 800) {
        return "☁️";
    } else {
        return "⁉️";
    }
}

function displayError(message) {
    
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("error-display");

    card.textContent = "";
    card.style.display = "flex";

    card.appendChild(errorDisplay);
}
