import React, {Component} from 'react';
import EnhabitLandingPage from './Enhabit-LandingPageDesign-01.png';
import EnhabitTraining from './Enhabit-Portal-User-Guide_Page_1.jpg';
import EnhabitPortal from './enhabit-portal-homepage.png';

class Enhabit extends Component {
    
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
                    <h2>Enhabit Brand Merchandise Shop</h2>
                    <p>The Enhabit landing page houses multiple buying options for Enhabit branded merchandise, as well as, some training documents for buyers. 
                        The design of the Portal store hero banner, category images, and Portal User Guide are modern and on brand. (Formerly Encompass Health) 
                        Responsible for the design and development.</p>
                    <a href="https://bn-missionctrl.s3.amazonaws.com/missionCtrl/Enhabit/Shop-Enhabit/index.html" target="_blank">View Enhabit site</a>
                </div>

                <div className="img-container">
                    <img src={EnhabitLandingPage} alt="enhabit landingpage"/>
                </div>
                <div className="img-container">
                    <img src={EnhabitPortal} alt="enhabit portal homepage screenshot" />
                </div>
                <div className="img-container">
                    <img src={EnhabitTraining} alt="enhabit training document"/>
                </div>
            </div>
        )
    }
}
export default Enhabit;