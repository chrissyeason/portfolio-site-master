import React, {Component} from 'react';
// import { Modal, ModalHeader, ModalBody } from 'reactstrap';
// import './About.css';
import CakePleaseHomepage from './homepage-cake-love.jpg';
import RecipesPage from './recipes-page.jpg';

class CakePlease extends Component{
    
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

    render(){

      return(       
            <div className="show-page" id="top-page">
                <div className="description">
                    <h2>Cake Please Recipes App</h2>
                        <p>Ruby on Rails is combined a with PostgreSQL database and React to build this full stack application 
                            that allows the cake community to collaborate by uploading their own recipes.</p>
                        <a href="https://github.com/chrissyeason/Cake-Please-" target="_blank">github.com/chrissyeason/Cake-Please-</a>
                </div>
                <div className="img-container">
                    <img src={CakePleaseHomepage}/>
                </div>
                    
                <div className="img-container">
                    <img src={RecipesPage}/>
                </div>
                
                <div className="space"></div> 
            </div>        
        )  
    }  
}

export default CakePlease;