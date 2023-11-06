import React from 'react'
import { Accordion, AccordionItemHeading, AccordionItemPanel, AccordionItem, AccordionItemButton } from "react-accessible-accordion"
import "./forecast.css"

const Forecast = (data) => {
    // console.log(data);
    return (
        <div classname="forecast">
            <label className="title"> Forecast </label>
            <div className="test" >
               
                {data.data.list.slice(0, 8).map((item, idx) => (
                    <div className = "hourly">
                    {/* { item.dt_txt } */}
                    <img alt="weather" className="weather-icon" src={`icons/${item.weather[0].icon}.png`} />

                    </div>
                ))}
            </div>


        </div>
    )
}

export default Forecast;