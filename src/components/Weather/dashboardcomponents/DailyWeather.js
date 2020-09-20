import React from 'react';
import DailyWeatherForecastCard from './DailyWeatherForecastCard';
import classes from './DailyWeather.module.css'

const DailyWeather = (props) =>{
    console.log(props.weatherDaily)

  let x = props.weatherDaily.map((d,index)=>{
    return <DailyWeatherForecastCard everyDay={d} key={index}/>
})
  return(
        
        <div>
            <h3>Daily</h3>
            {
                x
            }
        </div>
    )
}
export default DailyWeather