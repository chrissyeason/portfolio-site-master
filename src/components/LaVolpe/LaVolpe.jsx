import React, {Component} from 'react';
import LaVolpeBrand from './LaVolpe-brand-combo.png';
import LaVolpeBusinessCard from './LaVolpe-businesscard.png';
import EventBrochureCover from './LaVolpe-brochure-cover.jpg';
import EventBrochure5 from './LaVolpe-brochure-page5.jpg';
import EventBrochure2 from './LaVolpe-brochure-page2.jpg';
import EventBrochure3 from './LaVolpe-brochure-page3.jpg';
import Menu from './LaVolpe-menu.png';
import PostCardBack from './LaVolpe-Postcard-back.jpg';
import PostCardFront from './LaVolpe-Postcard-front.jpg';
import LoyaltyCard from './LaVolpe-loyaltyCard.jpg';

class LaVolpe extends Component{
    scrollToTop = () => {
        window.scroll({
            top: 0, 
            behavior: 'smooth' 
        });
    }
    componentDidMount(){
        this.scrollToTop()    
    }
    render(){

      return(       
            <div className="show-page"  id="top-page">
                    <body>
                        <div className="description">
                        <h2>La Volpe Branding Campaign</h2>
                            <p>Set the upscale tone for the new Austin restaurant by designing the 
                                logo, business and loyalty cards, event brochure, newsletter template,
                                and food and beverage menus.
                            </p>
                            
                            
                        </div>
                        <div className="LV-img-container img-container">
                            <img src={LaVolpeBrand}/>
                        </div> 
                        
                        <div className="LV-img-container img-container">
                            <img src={Menu}/>
                        </div>

                        <div className="LV-img-container img-container">
                            <img src={EventBrochureCover}/>
                            <img src={EventBrochure2}/>
                            <img src={EventBrochure3}/>
                            <img src={EventBrochure5}/>
                        </div>

                        <div className="LV-img-container img-container">
                            <img src={PostCardFront}/>
                            <img src={PostCardBack}/>
                        </div>

                        <div className="space"></div>
                    </body>               
            </div>        
        )  
    }  
}

export default LaVolpe;