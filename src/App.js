import './App.css';
import Search from './components/search';
import Weather from './components/current-weather';
import Forecast from './components/forecast';
import React, {useState} from 'react';

function App() {

  const[currWeather, setCurrWeather] = useState(null);
  const[forecast, setForecast] = useState(null);
  const[testing, setTesting] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");
    const key = "bb589e20ce1dde5c3437a39738db187b";
    const currWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`);
    const forecastFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=imperial`);
    const test = fetch(`http://api.weatherapi.com/v1/forecast.json?key=${"77741f8ad743494ca9f232610230511"}&q=${lat},${long}&days=1`);
    Promise.all([currWeatherFetch, forecastFetch, test])
    .then(async (response) => {
      const currReponse = await response[0].json();
      const forecastResponse = await response[1].json();
      const testingResponse = await response[2].json();
      setCurrWeather({city: searchData.short, ...currReponse});
      setForecast({city: searchData.short, ...forecastResponse});
      setTesting(testingResponse);
    })
    .catch((err) => console.log(err));
  }



  return (
    <div className = "cont">
      <div className = "searchBar">
        <Search onSearchChange={handleOnSearchChange}/>
      </div>
      <div className = "currWeather">
        {currWeather && <Weather data={currWeather} alt = {testing}/>}
        {forecast && <Forecast data={forecast}/>}
      </div>
      
      
    </div>
  );
}

export default App;
