import React, {Component} from 'react';
import CampHomepage1 from './gal-homepage.png';
import CampHomepage2 from './gal-homepage-2.png';
import CampAccomodationsPage from './gal-accommodations-page.png';
import CampCollectionAsset from './gal-collection-of-assets3-01.png';


class Camp extends Component {
    scrollToTop = () => {
        window.scroll({
            top: 0, 
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
                    <h2>Grown Ass Lady Camp</h2>
                    <p>This is a passion project. I love the freedom and creativity in every design. Responsible for branding,
                        website, annual t-shirt design, annual save the date, social media graphics, branded merchandise, 
                        and welcome brochure.
                    </p>
                
                    <a href="https://www.galcamp.com/">galcamp.com</a>
                </div>
                <div className="img-container">
                    <img src={CampCollectionAsset}/>
                </div>
                <div className="img-container">
                    <img src={CampHomepage1} />
                </div> 
                <div className="img-container">
                    <img src={CampHomepage2}/>
                </div>
                <div className="img-container">
                    <img src={CampAccomodationsPage}/>
                </div>
                
            </div>        
        )  
    }  
}

export default Camp;