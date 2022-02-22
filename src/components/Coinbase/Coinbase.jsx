import React, {Component} from 'react';
import CoinbaseLandingPage from './coinbase-landingpage.jpg';

class Coinbase extends Component {
    
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
            <div className="show-page" >
                <div className="description">
                    <h2>Coinbae MKT</h2>
                    <p>This landing page allows buyers to shop multiple ways. Responsible for the design and development. </p>
                    <a href="https://files.boundlessnetwork.com/missionCtrl/Coinbase/Coinbase-Merchandise-Homepage/index.html" target="_blank" rel="noopener noreferrer">View coinbaemkt.com</a>
                </div>

                <div className="img-container">
                    <img src={CoinbaseLandingPage} />
                </div>
                <div className="space"></div> 
            </div>
        )
    }
}
export default Coinbase;