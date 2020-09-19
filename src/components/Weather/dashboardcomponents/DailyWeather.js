import React from 'react';
import DailyWeatherForecastCard from './DailyWeatherForecastCard';

const DailyWeather = (props) =>{
  //  console.log(props.weatherDaily)
  let x = props.weatherDaily.map((d,index)=>{
    return <DailyWeatherForecastCard i={d} key={index}/>
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