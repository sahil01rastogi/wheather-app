const apiKey = 'cfca1ff5acfeb872cd21fe1ef8b76c59';  // Replace with your OpenWeatherMap API key
const searchBtn = document.querySelector('.search-btn');
const locationBtn = document.querySelector('.location-btn');
const cityInput = document.querySelector('.city-input');
const currentWeatherDetails = document.querySelector('.current-weather .details');
const weatherCards = document.querySelectorAll('.weather-cards .card');

// Function to fetch weather data by city name
function getWeatherByCity(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      updateCurrentWeather(data);
      return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
    })
    .then(response => response.json())
    .then(data => {
      updateForecast(data);
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

// Function to fetch weather data by current location
function getWeatherByLocation(latitude, longitude) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      updateCurrentWeather(data);
      return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
    })
    .then(response => response.json())
    .then(data => {
      updateForecast(data);
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

// Function to update current weather details in the UI
function updateCurrentWeather(data) {
  currentWeatherDetails.innerHTML = `
    <h2>${data.name} (${data.weather[0].description})</h2>
    <h6>Temperature: ${data.main.temp}°C</h6>
    <h6>Wind: ${data.wind.speed} M/S</h6>
    <h6>Humidity: ${data.main.humidity}%</h6>
  `;
}

// Function to update 5-day forecast in the UI
function updateForecast(data) {
  const dailyData = data.list.filter((reading) => reading.dt_txt.includes("12:00:00"));
  dailyData.forEach((reading, index) => {
    weatherCards[index].innerHTML = `
      <h3>${new Date(reading.dt_txt).toDateString()}</h3>
      <h6>Temp: ${reading.main.temp}°C</h6>
      <h6>Wind: ${reading.wind.speed} M/S</h6>
      <h6>Humidity: ${reading.main.humidity}%</h6>
    `;
  });
}

// Event listener for search button
searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeatherByCity(city);
  }
});

// Event listener for location button
locationBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeatherByLocation(latitude, longitude);
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
});
