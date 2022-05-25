import React, {Component} from 'react';
import MCHomepage from './MC-hompage-cropped.png';
import MCPortPage from './MC-portalPage.png';
import MCCustomDesignPage from './MC-customDesignPage.png';
import MCHomepageHoverButton from './mc-hover-button-enlarge.gif';
import MCdropdown from './mc-dropdown.gif';

class MissionControl extends Component {
    
    scrollToTop = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
    }
    componentDidMount(){
        this.scrollToTop()    
    }
    render() {
        return(
            <div className="show-page">
                <div className="description">
                    <h2>Mission Control Website</h2>
                    <p>This site provides information and pricing for all of the services that the Mission Control team provides. Responsible for design and development.</p>
                    <a href="https://bn-missionctrl.s3.amazonaws.com/missionCtrl/Mission-Control-Landing-Page/MCEPS-homepage/index.html" target="_blank">View missioncontrol.boundlessnetwork.com</a>
                </div>

                <div className="img-container">
                    <img src={MCHomepage} />
                    <img src={MCdropdown} alt="dropdown effect" />
                    <img src={MCCustomDesignPage} />
                </div>
            </div>
        )
    }
}
export default MissionControl; 