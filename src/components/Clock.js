import React , {useState , useEffect} from 'react';
import classes from './Clock.module.css'
const Clock = () =>{
    const t = new Date().toLocaleTimeString();
    const [localTime,setLocalTime]=useState(t)
    const [viewDay , setViewDay] = useState(false);
    let todayDate=new Date().toLocaleDateString();
     todayDate= viewDay? todayDate:null
    useEffect(()=>{
        document.title = 'clock';
    },[])
    
    setInterval(()=>{
        const t = new Date().toLocaleTimeString();
        setLocalTime(t)
    },1000)
    return(
        
        <div className={classes.Centered}>
            <div className={classes.heading}><h2 id="head">Digital Clock</h2></div>
            <div>
                <div>
                <label className={classes.switch}>
                <input type="checkbox"  onClick={()=>setViewDay(!viewDay)} id="toggle"/>
                <span className={[classes.slider , classes.round].join(' ')}></span>
                </label>
                </div>
                <div className={classes.circle}>
                <div>{localTime}</div>
                <div id="date">{todayDate}</div>
                </div>
                
            </div>
        </div>
        
        
    )
}
export default Clock;