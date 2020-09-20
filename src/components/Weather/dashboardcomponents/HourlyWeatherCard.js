import React from 'react';
import classes from './HourlyWeather.module.css'
const HourlyWeatherCard = (props) =>{
    let iconSrc = `http://openweathermap.org/img/wn/${props.everyHour.weather[0].icon}.png`;
    let date = new Date(props.everyHour.dt * 1000)
    date = String(date)
   date = date.split(' ')
   date = date[4]
   date = date.split(':')
    return(
        <div className={[classes.HourlyWeather,"card"].join(' ')} style={{ width: "10rem",display: "flex" }}>
        <div className="card-body"> 
    <           p>{date[0]} : {date[1]}</p>
                <img src={iconSrc} alt="loading"/>
                <div className={classes.Temp}>
                    {Math.floor(props.everyHour.temp)}&deg;&nbsp;<sup>c</sup>
                </div>
                <p className={classes.Description}>{props.everyHour.weather[0].description}</p>
        </div>
    </div>
    )
}
export default HourlyWeatherCard;