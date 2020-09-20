import React from 'react';
import DailyWeatherForecastCard from './DailyWeatherForecastCard';
import Carousel from 'react-elastic-carousel'
import  './DailyWeather.module.css'

const DailyWeather = (props) =>{
    console.log(props.weatherDaily)

  let x = props.weatherDaily.map((d,index)=>{
    return <DailyWeatherForecastCard everyDay={d} key={index}/>
})
let items;
if( window.innerWidth<300) items=1
else if(window.innerWidth<450) items=2
else if( window.innerWidth<800) items=4
else items=5
  return(
    <div style={{backgroundColor:"#DBDDE2"}}>
    <div className="text-center h5 pt-2">Daily</div>

    <Carousel style={{backgroundColor:"#DBDDE2"}} itemsToScroll={items} pagination={false} itemsToShow={items}>
    {x}
</Carousel>
</div>
    )
}
export default DailyWeather