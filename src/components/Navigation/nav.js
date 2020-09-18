import React  , {Component} from 'react'
import {BrowserRouter as Router  , NavLink} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import classes from './nav.module.css'
class Nav extends Component{
    render(){
        return(
           <Router>
               <div>
                   <div>
                   <ul>
                       <li>
                           <NavLink to='/' activeClassName={classes.Active} id='Home'>Home</NavLink>
                       </li>
                       <li>
                           <NavLink to='/projects'  activeClassName={classes.Active} id="Projects">Projects</NavLink>
                       </li>
                       <li>
                           <NavLink to='/services'  activeClassName={classes.Active} id="Services">Services</NavLink>
                       </li>
                       <li>
                           <NavLink to='/contacts'  activeClassName={classes.Active} id="Contacts">Contacts</NavLink>
                       </li>
                   </ul>
                   </div>
                   <div>
                            <Route path='/' exact strict  render={
                                ()=>{
                                    return (<h1>you choose <b>Home</b></h1>)
                                }
                            }/>
                            <Route path='/projects' exact strict render={
                                ()=>{
                                    return (<h1>you choose <b>Projects</b></h1>)
                                }
                            }/>
                            <Route path='/services' exact strict render={
                                ()=>{
                                    return (<h1>you choose <b>Services</b></h1>)
                                }
                            }/>
                            <Route path='/contacts' exact strict render={
                                ()=>{
                                    return (<h1>you choose <b>Contacts</b></h1>)
                                }
                            }/>
                   </div>
               </div>

           </Router>
        )
    }
}
export default Nav;