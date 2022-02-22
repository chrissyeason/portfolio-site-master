import React, {Component} from 'react';
import EnhabitLandingPage from './Enhabit-LandingPageDesign-01.png';

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
                    <p>This landing page houses multiple buying options for Enhabit branded merchandise. (Formerly Encompass Health.) Responsible for the design and development.</p>
                    <a href="https://bn-missionctrl.s3.amazonaws.com/missionCtrl/Enhabit/Shop-Enhabit/index.html" target="_blank">View Enhabit site</a>
                </div>

                <div className="img-container">
                    <img src={EnhabitLandingPage} />
                </div>
            </div>
        )
    }
}
export default Enhabit;