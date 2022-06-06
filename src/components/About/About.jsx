import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ResumeDownload from './ChrissyEason-resume-2022.pdf';
import './About.css';

class About extends Component{
    constructor(props){
        super(props);
        this.state ={
            modal:false
        }
        this.toggle = this.toggle.bind(this);
        console.log(props)

    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    render(){

      return(       
            <div className="about-modal">
                <Button color="white" onClick={this.toggle}><h5>about</h5></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="Modal">
                <ModalHeader className="modal-header" toggle={this.toggle}><h2>about</h2></ModalHeader>
                <ModalBody>
                <div className="modal-description">
                    <p>After earning my bachelor’s degree in Communication Arts from East Carolina University 
                        in Greenville, NC in 2004, I gained a graphic design position at Igoe Creative, a small 
                        but fast-paced advertising agency. In two short years, I was promoted to Creative Director. 
                        In this role, I challenged the creative department to step out of their comfort zones and 
                        find new ways to represent our clients.  
                    </p>
                    <p>
                        While this position was fulfilling in many ways, I started to explore other creative outlets. 
                        In 2009, I applied to culinary school in Austin and began a new adventure. After graduation, 
                        I bakery hopped for several years all the while picking up freelance graphic design jobs. 
                    </p>
                    <p>
                        It wasn’t until those freelance gigs started to gain steam that I realized I enjoy that work more 
                        than the bakery. This realization was the driving force that landed me at General Assembly to pursue 
                        the Software Engineering program. The program is more than 700 hours of industry-relevant technologies 
                        including, but not limited to, HTML5, CSS, JavaScript, and React.
                    </p>
                    <p>
                        After completing my courses at General Assembly, I joined Boundless Network where I design and develop 
                        landing pages, websites, emails, digital training manuals, e-commerce stores, and many other 
                        miscellaneous marketing materials.
                    </p>
                   
                </div>
                <hr/>
                <div className="modal-description">
                    <a href={ResumeDownload} download="ChrissyEason-Resume.pdf" id="download-link">Download Resume</a>
                    <br/>
                    <a href="http://linkedin.com/in/chrissy-eason-designs" target="_blank">linkedin.com/in/chrissy-eason-designs</a>
                    <br/>
                    <a href="http://github.com/chrissyeason" target="_blank">github.com/chrissyeason</a>
                    <br/>
                    
                </div>
                
                </ModalBody>
                
                </Modal>
            </div>        
        )  
    }  
}

export default About;