import React from 'react';
import DoCoolShitThumbnail from './components/DoCoolShit/DCS-thumbnail.png';
import MeowWoofThumbnail from './components/MeowWoof/thumbnail.jpg';
import CakePleaseThumbnail from './components/CakePlease/thumbnail-cake-please.jpg';
import CedarDoorThumbnail from './components/CedarDoor/CedarDoor-logo-wood-sm.jpg';
import LaVolpeThumbnail from './components/LaVolpe/LaVolpe-logo-sm.jpg';
import CampThumbnail from './components/Camp/gal-thumbnail-01.png';
import SlackThumbnail from './components/Slack/Slack-thumbnail-drinkware-01.png';
import WingStopThumbnail from './components/WingStop/wingstop-thumbnail.png';
import EncompassThumbnail from './components/Encompass/Encompass-thumbnail.png';
import CoinbaseThumbnail from './components/Coinbase/coinbase-thumbnail-3.png';
import EnhabitThumbnail from './components/Enhabit/enhabit-thumbnail.jpg';
import MissionControlThumbnail from './components/MissionControl/MC-thumbnail-2-01.png';


function AddThumbButton(props){
    return(
        <div>
            <div className="thumbnail-container">
                <img src={EnhabitThumbnail} onClick={props.addEnhabit} />
                <img src={SlackThumbnail} onClick={props.addSlack}/>
                <img src={MissionControlThumbnail} onClick={props.addMissionControl} />

                <img src={DoCoolShitThumbnail} onClick={props.addCool} />
                <img src={MeowWoofThumbnail} color="white" onClick={props.addMeow} />
                <img src={CakePleaseThumbnail} onClick={props.addCake} />

                <img src={EncompassThumbnail} onClick={props.addEncompass} />
                <img src={CoinbaseThumbnail} onClick={props.addCoinbase} />
                <img src={WingStopThumbnail} onClick={props.addWingStop} />

                <img src={CampThumbnail} onClick={props.addCamp} />
                <img src={CedarDoorThumbnail} onClick={props.addCedarDoor} />
                <img src={LaVolpeThumbnail} onClick={props.addLaVolpe} />
            </div>
        </div>
    )
}
export default AddThumbButton;