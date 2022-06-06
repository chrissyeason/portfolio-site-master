import React, {Component} from 'react';
import WingStopPage from './wingstop-homepage.png';

class WingStop extends Component {
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    componentDidMount() {
        this.scrollToTop()
    }
    render() {
        return(
            <div className="show-page">
                <div className="description">
                    <h2>Wingstop Brightsites Store</h2>
                    <p>Brightsites is one of the many ecommerce platforms that I often work with. It uses the Liquid templating language. I customized the 
                        code to ensure the store follows the Wingstop's brand standards and also added some additional features to the homepage.
                    </p>
                </div>
                <div className="img-container">
                    <img src={WingStopPage} />
                </div>
            </div>
        )
    }
}
export default WingStop;