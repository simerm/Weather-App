import React from 'react'
// import { Accordion, AccordionItemHeading, AccordionItemPanel, AccordionItem, AccordionItemButton } from "react-accessible-accordion"
import "./forecast.css"

const handleDate = (date) => {
    const arr = date.split(" ");
    let x = arr[1].substring(0, arr[1].length - 3);
    if (parseInt(x.substring(0, 2)) > 12) {
        let i = parseInt(x.substring(0, 2)) - 12;
        arr[1] = "0" + i + x.substring(2, x.length) + " PM";
    }
    else if ((parseInt(x.substring(0, 2)) === 0)) {
        arr[1] = 12 + x.substring(2, x.length) + " AM";
    }
    else if ((parseInt(x.substring(0, 2)) === 12)){
        arr[1] = x + " PM"
    }
    else {
        arr[1] = x + " AM"
    }
    return arr[1];
}

const Forecast = (data) => {
    // console.log(data);
    return (
        <div classname="forecast">
            <label className="lab"> Forecast </label>
            <div className="test" >
                {data.data.list.slice(0, 6).map((item, idx) => (

                    <div className="item">
                        <div className="hourly">
                            <img alt="weather" className="weather-icon" src={`icons/${item.weather[0].icon}.png`} />
                            <div className="title">
                                <p className="date">{handleDate(item.dt_txt)}</p>
                                <p className="desc">{item.weather[0].main}</p>
                            </div>
                        </div>
                        <div className="mid">
                            <p className="temperature"> {Math.round(item.main.temp)}˚F </p>
                            <div className="dets">
                                <div className="parameter-r">
                                    <span className="parameter-l"> Feels Like: </span>
                                    <span className="parameter-v"> {Math.round(item.main.feels_like)} ˚F</span>
                                </div>
                                <div className="parameter-r">
                                    <span className="parameter-l"> Wind: </span>
                                    <span className="parameter-v"> {item.wind.speed} m/s</span>
                                </div>
                                <div className="parameter-r">
                                    <span className="parameter-l"> Humidity: </span>
                                    <span className="parameter-v"> {item.main.humidity}%</span>
                                </div>
                                <div className="parameter-r">
                                    <span className="parameter-l"> Pressure: </span>
                                    <span className="parameter-v"> {item.main.pressure} hPa</span>
                                </div>
                            </div>
                        </div>
                    </div>


                ))}
            </div>


        </div>
    )
}

export default Forecast;