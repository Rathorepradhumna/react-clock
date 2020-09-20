import React from 'react';
import classes from './DailyWeather.module.css'
const weekday = new Array(7);
weekday[0] = 'Sun';
weekday[1] = 'Mon';
weekday[2] = 'Tue';
weekday[3] = 'Wed';
weekday[4] = 'Thu';
weekday[5] = 'Fri';
weekday[6] = 'Sat';
weekday[7] = 'Sun';

const getDate = (date) => {
    return `${weekday[date.getDay()]} ${date.getDate()}`;
};
const DailyWeatherForecastCard = (props) =>{
    let iconSrc = `http://openweathermap.org/img/wn/${props.everyDay.weather[0].icon}.png`;
    let date = new Date(props.everyDay.dt * 1000)
    date = String(date)
   date = date.split(' ')
   console.log(date)
   
    return( 
        <div className={[classes.DailyWeatherCard,"card"].join(' ')}>
        <div className="card-body">
          <small>{date[0]}  {date[2]}</small>
          <img src={iconSrc} />
           <div className={classes.Temp}>
            {parseInt(props.everyDay.temp.max)}&deg;
            &nbsp;<small>{parseInt(props.everyDay.temp.min)}&deg;</small>
          </div>
          <div className={classes.Description}>
            <small>{props.everyDay.weather[0].description}</small>
          </div>
       </div>
       
    </div>


    )
}

export default DailyWeatherForecastCard;