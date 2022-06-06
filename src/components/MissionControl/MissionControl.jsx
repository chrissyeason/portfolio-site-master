import React, {Component} from 'react';
import MCHomepage from './MC-hompage-cropped.png';
import MCPortPage from './MC-portalPage.png';
import MCCustomDesignPage from './MC-customDesignPage.png';
import MCHomepageHoverButton from './mc-hover-button-enlarge.gif';
import MCdropdown from './mc-dropdown.gif';
import MCaboutPage from './mc-about-page.png';

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
                    <h2>Mission Control Website for Boundless Network</h2>
                    <p>This site houses a LOT of information and pricing for all of the services that the Mission 
                        Control team offers. The main objective when redesigning the site was to provide a better user experience
                        for the sales reps. They can now find what they need faster and easier. 
                        Responsible for design and development.</p>
                    <a href="https://bn-missionctrl.s3.amazonaws.com/missionCtrl/Mission-Control-Landing-Page/MCEPS-homepage/index.html" target="_blank">View missioncontrol.boundlessnetwork.com</a>
                </div>

                <div className="img-container">
                    <img src={MCHomepage} />
                </div>
                <div className="img-container">
                    <img src={MCdropdown} alt="dropdown effect" />
                </div>
                <div className="img-container">
                    <img src={MCCustomDesignPage} />
                </div>
                <div className="img-container">
                    <img src={MCaboutPage} />
                </div>
            </div>
        )
    }
}
export default MissionControl; 