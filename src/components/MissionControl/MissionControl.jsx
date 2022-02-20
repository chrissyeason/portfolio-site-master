import React, {Component} from 'react';
import MCHomepage from './MC-hompage.png';
import MCPortPage from './MC-portalPage.png';
import MCCustomDesignPage from './MC-customDesignPage.png';

class MissionControl extends Component {
    constructor(props) {
        super(props);
    }
    scrollToTop = () => {
        document.querySelector('#top-page').scrollIntoView({
            behavior: 'smooth'
        });
    }
    componentDidMount(){
        this.scrollToTop()    
    }
    render() {
        return(
            <div className="show-page" id="top-page">
                <div className="description">
                    <h2>Mission Control Website</h2>
                    <p>This site provides information and pricing for all of the services that the Mission Control team provides. Responsible for design and development.</p>
                    <a href="https://bn-missionctrl.s3.amazonaws.com/missionCtrl/Mission-Control-Landing-Page/MCEPS-homepage/index.html" target="_blank">missioncontrol.boundlessnetwork.com</a>
                </div>

                <div className="img-container">
                    <img src={MCHomepage} />
                    <img src={MCCustomDesignPage} />
                    <img src={MCPortPage} />
                </div>
            </div>
        )
    }
}
export default MissionControl; 