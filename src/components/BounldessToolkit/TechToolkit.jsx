import React, {Component} from 'react';
import TechToolkitPage from './boundless-tool-kit.png';

class TechToolkit extends Component {
    constructor(props) {
        super(props);
    }
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    componentDidMount(){
        this.scrollToTop()    
    }
    render() {
        return(
            <div className="show-page" id="top-page">
                    <div className="description">
                        <h2>Boundless Technology Toolkit</h2>
                        <p>This site introduces and describes the ins and outs Portal, Boundless's proprietary software, to potential new sales reps joining the company. Responsible for design and development.</p>
                        <a href="https://bn-missionctrl.s3.amazonaws.com/Boundless-TechToolKit/code/index.html#top" target="_blank">boundless tech toolkit</a>
                    </div>

                    <div className="img-container">
                        <img src={TechToolkitPage} />
                    </div>
                
            </div>
        )
    }
}
export default TechToolkit;