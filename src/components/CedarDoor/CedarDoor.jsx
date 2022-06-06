import React, {Component} from 'react';
import CedarDoorLogo from './CedarDoor-logo-wood.jpg';
import EventBrochureCover from './CedarDoor-brochure-cover.jpg';
import EventBrochure1 from './CedarDoor-brochure-pg1.jpg';
import EventBrochure2 from './CedarDoor-brochure-pg2.jpg';
import EventBrochure3 from './CedarDoor-brochure-pg3.jpg';
import Signage from './CedarDoor-HappyHourSign.jpg';

class CedarDoor extends Component{
    scrollToTop = () => {
        window.scroll({
            top: 0, 
            behavior: 'smooth' 
        });
    }
    componentDidMount(){
        this.scrollToTop()    
    }
    render(){

      return(       
            <div className="show-page" id="top-page">
                    <body>
                        <div className="description">
                        <h2>Cedar Door Restaurant</h2>
                            <p>A local, Austin staple, Cedar Door Patio Bar & Grill, needed a digital, event brochure to pass out to 
                                prospective buyers, as well as some signage.
                            </p>
                            
                            
                        </div>
                        <div className="LV-img-container img-container">
                            <img src={CedarDoorLogo}/>
                        </div> 
                        
                        <div className="LV-img-container img-container">
                            <img src={EventBrochureCover}/>
                            <img src={EventBrochure1}/>
                            {/* <img src={EventBrochure2}/> */}
                            <img src={EventBrochure3}/>
                        </div>

                        <div className="img-container" id="signage">
                            <img src={Signage}/>
                        </div>

                        <div className="space"></div>
                    </body>               
            </div>        
        )  
    }  
}

export default CedarDoor;