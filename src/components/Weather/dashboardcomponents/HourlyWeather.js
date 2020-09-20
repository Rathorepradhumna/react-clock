import React from 'react';
import Carousel from 'react-elastic-carousel'
import HourlyWeatherCard from './HourlyWeatherCard'
const HourlyWeather = (props) =>{
    let x = props.weatherHourly.map((d,index)=>{
        return <HourlyWeatherCard everyHour={d} key={index}/>
    })
let items;
if( window.innerWidth<300) items=1
else if(window.innerWidth<450) items=2
else if( window.innerWidth<800) items=4
else items=5
    return(
        <div style={{backgroundColor:"#B7C6EB"}}>
        <div className="text-center h5 pt-2">Hourly Weather</div>
    
        <Carousel style={{backgroundColor:"#B7C6EB"}} itemsToScroll={items} pagination={true} itemsToShow={items}>
        {x}
    </Carousel>
    </div>
    )
}
export default HourlyWeather;