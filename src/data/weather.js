const apiKey = 'bfdf41dcb1497aec26638e957ebdcda6';
const openWeatherMapURL = 'https://api.openweathermap.org/data/2.5/weather?';

class Weather {
  constructor() {}

  getCityWeather = async () => {
    const response = await fetch();
    const data = await response.json();

    console.log(data);
  };
}

export default Weather;
