import React, {Component} from 'react';
import EncompassLandingPage from './Encompass-landingpage.jpg';

class Encompass extends Component{
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
                    <h2>Encompass Health Branded Merchandise Hub</h2>
                    <p>This landing page houses multiple buying platforms. It fits perfectly within their branding guidelines. <br/> Responsible for the design and development.</p>
                    <a href="https://bn-missionctrl.s3.amazonaws.com/missionCtrl/Encompass/Encompass-LandingPage/index.html" target="_blank">View Encompass site </a>
                </div>

                <div className="img-container">
                    <img src={EncompassLandingPage} />
                </div>
            </div>
        )
    }
}
export default Encompass;