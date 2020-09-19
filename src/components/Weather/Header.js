import React from 'react'
import classes from './Header.module.css'

const Header = (props)=>{
    return(
        <nav className={[classes.header , 'navbar', 'navbar-dark',' bg-dark'].join(' ')} style={{overflowX: 'hidden'}}>
        <div className="container">
            <div className={classes.brand}>
                <i className={[classes.brandicon , 'fa fa-sun-o fa-2x'].join(' ')}></i>
                 <span className={classes.brandtext}>{props.title}</span>
            </div>
        </div>
    </nav>
    )
}
export default Header