import './App.css';
import Search from './components/search';
import Weather from './components/current-weather';
import React, {useState} from 'react';

function App() {

  const[currWeather, setCurrWeather] = useState(null);
  const[forecast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");
    const key = "bb589e20ce1dde5c3437a39738db187b";
    const currWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`);
    const forecastFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}`)

    Promise.all([currWeatherFetch, forecastFetch])
    .then(async (response) => {
      const currReponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrWeather({currReponse});
      setForecast({forecastResponse});
    })
    .catch((err) => console.log(err));
  }

  console.log(currWeather);
  console.log(forecast);

  return (
    <div className = "cont">
      <div className = "searchBar">
        <Search onSearchChange={handleOnSearchChange}/>
      </div>
      <div className = "currWeather">
        <Weather />
      </div>
      
    </div>
  );
}

export default App;
