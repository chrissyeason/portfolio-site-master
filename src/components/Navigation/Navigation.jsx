import React from 'react';
import About from '../About/About';
import Contact from '../Contact';
import './Navigation.css';

function Navigation(props){
    return(
        <div className="nav-bar">
            <div className="nav-header-left">
                <h4 onClick={props.returnToHomeState}>Chrissy Eason</h4>
                <h5>frontend developer | designer</h5>
            </div>
            
            <div className="nav-right">
                <About />
                <Contact />
            </div>
        </div>
    )
}

export default Navigation;