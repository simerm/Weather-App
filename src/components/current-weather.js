  import React from 'react'
  import "./current-weather.css"
  
  const Weather = () => {
    return (
      <div className="weather">
        <div className = "top">
            < p className = "city">City</p>
            <p className = "description"> desc  </p>
            <img alt = "weather" className = "weather-icon" src="icons/01d.png"/>
        </div>
        
        <div className = "bottom">
            <p className = "temp"> 70˚F </p>
            <div className = "details">
                <div className = "parameter-row">
                    <span className = "parameter-label"> Feels like: </span>
                    <span className = "parameter-value"> 22˚F</span>
                </div>
                <div className = "parameter-row">
                    <span className = "parameter-label"> Wind: </span>
                    <span className = "parameter-value"> 22˚F</span>
                </div>
                <div className = "parameter-row">
                    <span className = "parameter-label"> Humidity: </span>
                    <span className = "parameter-value"> 22˚F</span>
                </div>
                <div className = "parameter-row">
                    <span className = "parameter-label"> Pressure: </span>
                    <span className = "parameter-value"> 22˚F</span>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Weather