import React, { useState}from 'react'
import Search from '../../components/Search/Search';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';
import { WEATHER_API_URL,WEATHER_API_KEY } from '../../components/api';

import './WeatherApp.css'

const WeatherApp = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) =>{
    const [ lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    
    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forecastResponse });
    })
    .catch(console.log);
};
    console.log(currentWeather);
    console.log(forecast);
  return (
    <div className='weatherApp-container' id='weatherApp'>
      <div className='weatherApp-container-title'><h2>Weather Forcast</h2></div>
       <Search onSearchChange={handleOnSearchChange} className="search-box"/>
       {currentWeather && <CurrentWeather data={currentWeather}/>}
       {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default WeatherApp;
