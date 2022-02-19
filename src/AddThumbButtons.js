import React from 'react';
import DoCoolShitThumbnail from './components/DoCoolShit/thumbnail.jpg';
import MeowWoofThumbnail from './components/MeowWoof/thumbnail.jpg';
import CakePleaseThumbnail from './components/CakePlease/thumbnail-cake-please.jpg';
import CedarDoorThumbnail from './components/CedarDoor/CedarDoor-logo-wood-sm.jpg';
import LaVolpeThumbnail from './components/LaVolpe/LaVolpe-logo-sm.jpg';
import CampThumbnail from './components/Camp/Camp-Poster1-sm.jpg';
import SlackThumbnail from './components/Slack/Slack-thumbnail-drinkware-01.png';
import TechToolkitThumbnail from './components/BounldessToolkit/boundless-tool-kit-thumbnail.png';
import EncompassThumbnail from './components/Encompass/Encompass-thumbnail.png';
import CoinbaseThumbnail from './components/Coinbase/coinbase-thumbnail-3.png';
import EnhabitThumbnail from './components/Enhabit/enhabit-thumbnail.png';
import MissionControlThumbnail from './components/MissionControl/MC-thumbnail-01.png';

function AddThumbButton(props){
    return(
        <div>
            <div className="thumbnail-container">
                <img src={SlackThumbnail} onclick={props.addSlack} />
                <img src={TechToolkitThumbnail} onclick={props.addTechToolkit} />
                <img src={EncompassThumbnail} onclick={props.addEncompass} />
                <img src={CoinbaseThumbnail} onclick={props.addCoinbase} />
                <img src={EnhabitThumbnail} onclick={props.addEnhabit} />
                <img src={MissionControlThumbnail} onclick={props.addMissionControl} />
            </div>
        
        {/* <div className="thumbnail-container-2nd-row"> */}
            {/* <img src={DoCoolShitThumbnail} onClick={props.addCool} /> */}
            {/* <img src={MeowWoofThumbnail} color="white" onClick={props.addMeow} /> */}
            {/* <img src={CakePleaseThumbnail} color="white" onClick={props.addCake} /> */}
            {/* <img src={CedarDoorThumbnail} onClick={props.addCedarDoor}/> */}
            {/* <img src={LaVolpeThumbnail} onClick={props.addLaVolpe}/> */}
            {/* <img src={CampThumbnail} onClick={props.addCamp}/> */}
        {/* </div> */}
        </div>
    )
}
export default AddThumbButton;