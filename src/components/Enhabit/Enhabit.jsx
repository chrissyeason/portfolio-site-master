import React, {Component} from 'react';
import EnhabitLandingPage from './Enhabit-LandingPageDesign-01.png';

class Enhabit extends Component {
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
                    <h2>Enhabit Brand Merchandise Shop</h2>
                    <p>This landing page houses multiple buying resources. Responsible for design and development.</p>
                    <a href="" target="_blank">View Enhabit site</a>
                </div>

                <div className="img-container">
                    <img src={EnhabitLandingPage} />
                </div>
            </div>
        )
    }
}
export default Enhabit;