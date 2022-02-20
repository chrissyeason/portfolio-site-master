import React, {Component} from 'react';
import CoinbaseLandingPage from './coinbase-landingpage.jpg';

class Coinbase extends Component {
    
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
                    <h2>Coinbae MKT</h2>
                    <p>This landing page allows buyers to shop multiple ways. Responsible for design and development. </p>
                    <a href="https://files.boundlessnetwork.com/missionCtrl/Coinbase/Coinbase-Merchandise-Homepage/index.html" target="_blank" rel="noopener noreferrer">coinbaemkt.com</a>
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