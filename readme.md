# Weather App

A simple and elegant weather application that allows users to search for weather information by city name or use their current location to get the weather forecast. The app provides current weather details and a 5-day forecast, complete with weather icons.

## Features

- Search weather by city name.
- Get weather information using the current location.
- Display current weather conditions including temperature, wind speed, and humidity.
- 5-day weather forecast with detailed information.
- Dynamic weather icons based on the current weather conditions.


## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/weather-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather-app
    ```
3. Open `index.html` in your preferred web browser.

## Usage

1. Enter the name of a city in the input field and click the "Search" button to get the weather information for that city.
2. Alternatively, click the "Use Current Location" button to get the weather information for your current location.

## File Structure

- `index.html`: The main HTML file that contains the structure of the app.
- `style.css`: The CSS file for styling the app.
- `script.js`: The JavaScript file that contains the logic for fetching and displaying weather data.

## API

This app uses the [WeatherAPI](https://www.weatherapi.com/) to fetch weather data. You need an API key from WeatherAPI to use this app.

## Configuration

1. Sign up at [WeatherAPI](https://www.weatherapi.com/) to get your API key.
2. In `script.js`, replace `'YOUR_API_KEY'` with your actual API key:
    ```javascript
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${cityName}&days=5`)
    ```

## Contributing

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes.
4. Commit your changes:
    ```bash
    git commit -m 'Add new feature'
    ```
5. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
6. Create a pull request.

## Contact

For any inquiries or issues, please contact [sahilrastogi817l@gmail.com].
