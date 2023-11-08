import React from 'react'
import "./current-weather.css"

const Weather = ({ data, alt }) => {
  return (
    <div className="weather">
      <div className="top">
        < p className="city">{data.city}</p>
        <p className="description"> {data.weather[0].description}  </p>

      </div>

      <div className="bottom">
        <div className = "mainPresentation">
          <div className="tdetails">
            <p className="temp"> {Math.round(data.main.temp)}˚F </p>
            <p className="feelsLike"> Feels like: {Math.round(data.main.feels_like)}˚F</p>
          </div>
          <div className="timings">
            <div className="up">
              <img alt="sunrise" className="sunrise" src="sunrise.png" />
              <span className= "timingsText">{alt.forecast.forecastday[0].astro.sunrise}</span>
            </div>
            <div className="up">
              <img alt="sunset" className="sunset" src="sunset.png" />
              <span className= "timingsText">{alt.forecast.forecastday[0].astro.sunset}</span>
            </div>
          </div>


        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>

      <div className="details">
        <div className="parameter-row">
          <span className="parameter-label"> Wind: </span>
          <span className="parameter-value"> {data.wind.speed} m/s</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label"> Humidity: </span>
          <span className="parameter-value"> {data.main.humidity}%</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label"> Pressure: </span>
          <span className="parameter-value"> {data.main.pressure} hPa</span>
        </div>
      </div>

    </div>
  )
}

export default Weather