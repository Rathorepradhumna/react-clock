import React , {useState , useEffect} from 'react';
import classes from './Clock.module.css'
const Clock = () =>{
    const t = new Date().toLocaleTimeString();
    const [localTime,setLocalTime]=useState(t)
    const [viewDate , setViewDate] = useState(false);
    const [viewDay , setViewDay] = useState(false);
    let todayDate=new Date().toLocaleDateString();
    let day_number = ''
    
    
    useEffect(()=>{
        document.title = 'clock';
         day_number = new Date().getDay();
        console.log(day_number);
    },[])
    let day = ''
    if(day_number===1){
        day  = 'Monday';
    }
    else if(day===2){
        day = 'Tuesday'
    }
    else if(day===3){
        day = 'Wednesday'
    }
    
    else if(day===4){
        day = 'Thursday'
    }
    else if(day===5){
        day = 'Fiday'
    }
    else if(day===6){
        day = 'Saturday'
    }
    else{
        day = 'Sunday'
    }
    setInterval(()=>{
        const t = new Date().toLocaleTimeString();
        setLocalTime(t)
    },1000)
    let clicktoggle = ()=>{
        setViewDate(!viewDate)
        setViewDay(!viewDay)
    }
   let todayDay = viewDay?day:null
    todayDate= viewDate? todayDate:null
    return(
        
        <div className={classes.Centered}>
            <div className={classes.heading}><h2 id="head">Digital Clock</h2></div>
            <div>
                <div>
                <label className={classes.switch}>
                <input type="checkbox"  onClick={clicktoggle} id="toggle"/>
                <span className={[classes.slider , classes.round].join(' ')}></span>
                </label>
                </div>
                <div className={classes.circle}>
                <div>{localTime}</div>
                <div id="date">{todayDay}   {todayDate}</div>
                </div>
                
            </div>
        </div>
        
        
    )
}
export default Clock;