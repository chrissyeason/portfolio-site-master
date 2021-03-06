import React, {Component} from 'react';
import SlackHomepage from './Slack-Homepage-01.png';
import SlackRegionsPage from './Slack-region-page-01.png';
import SlackToggleGif from './slack-details-toggle.gif';


class Slack extends Component {
    
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
                        <h2>Slack Swag Marketplace Landing Page</h2>
                        <p>This landing page allows buyers to shop by user group type and region. 
                        Because Slack has multiple warehouses across the world, they needed a platform 
                        that would direct their user to the proper SSO depending on where they live. 
                        It fits perfectly within their branding guidelines. Responsible for design and 
                        development.</p>
                        <a href="https://bn-missionctrl.s3.amazonaws.com/missionCtrl/slack/Code-for-LandingPage/index.html" target="_blank">View slackswagmarketplace.com</a>
                    </div>

                    <div className="img-container">
                        <img src={SlackHomepage} />
                    </div>
                    <div className="img-container">
                        <img src={SlackRegionsPage} />
                    </div>
                    <div className="img-container">
                        <img src={SlackToggleGif} />
                    </div>
                
            </div>
        )
    }
}

export default Slack