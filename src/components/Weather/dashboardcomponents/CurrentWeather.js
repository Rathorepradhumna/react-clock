import React from 'react';
import classes from './CurrentWeather.module.css'
const CurrentWeather = (props) =>{
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let iconSrc = `http://openweathermap.org/img/wn/${props.weather.curicon}.png`;
    return(
        <div className={classes.currentweatherdisplay} style={{position: 'relative'}}>
        <div className={classes.weatherlocation}>Indore</div>
    <div className="weather-min-max-temp">{props.weather.maxtemp} | {props.weather.mintemp}</div>
        <div className={classes.weathercurrent}>                
            <span className={classes.weathercurrent}><big>{parseInt(props.weather.temp)}</big> <sup>c</sup></span>
        </div>
        <div className={classes.weathercondition}>
            <img className={classes.weathericon} src={iconSrc} alt="img" />
    <span className={classes.weatherdescription}>{props.weather.curmain} </span>
        </div>            
        
    <div className={classes.weatherupdate}>Updated as of getUpdateTime {h} : {m}</div>
        <i className={['refresh' ,'fa' , 'fa-refresh' , 'fa-3x'].join(' ')} ></i>
    </div>
    )
}
export default CurrentWeather;