import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import DoCoolShit from './components/DoCoolShit/DoCoolShit';
import CakePlease from './components/CakePlease/CakePlease';
import MeowWoof from './components/MeowWoof/MeowWoof';
import AddThumbButtons from './AddThumbButtons';
import Slack from './components/Slack/Slack';
import WingStop from './components/WingStop/WingStop';
import Encompass from './components/Encompass/Encompass';
import Coinbase from './components/Coinbase/Coinbase';
import Enhabit from './components/Enhabit/Enhabit';
import MissionControl from './components/MissionControl/MissionControl';
import Camp from './components/Camp/Camp';
import LaVolpe from './components/LaVolpe/LaVolpe';
import CedarDoor from './components/CedarDoor/CedarDoor';

class App extends Component {
  constructor(){
    super();
    this.state ={
      isStateEmpty: true,
  }
  
}
  // componentDidMount = () => {
  //   fetch('http://localhost:3000/projects')
  //   .then(res =>res.json())
  //   .then(projects=>this.setState({
  //     projects: projects
  //   }))
  //   .catch(err=>console.log(err))

  //   fetch(`https://meow-woof-app.herokuapp.com/`,
  //   {mode: 'no-cors'})
  //   .then(res=>console.log('woke up meowwoof'))

  //   fetch(`https://do-cool-shit.herokuapp.com/`, 
  //   {mode: 'no-cors'})
  //   .then(res=>console.log('woke up do-cool-shit'))
  // }
  returnToHomeState = () => {
    this.setState({
      ...this.state,
      isStateEmpty: true,
      isSlackStateEmpty: false,
      isWingStopStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeStateEmpty: false,
      isCedarDoorStateEmpty: false,
      isCampStateEmpty: false,
    })
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  addSlack = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: true,
      isWingStopStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeStateEmpty: false,
      isCedarDoorStateEmpty: false,
      isCampStateEmpty: false,
    })
    console.log('add slack was pressed')
  }
  addWingStop = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isWingStopStateEmpty: true,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeStateEmpty: false,
      isCedarDoorStateEmpty: false,
      isCampStateEmpty: false,
    })
    console.log('toolkit was pressed')
  }
  addEncompass = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isWingStopStateEmpty: false,
      isEncompassStateEmpty: true,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeStateEmpty: false,
      isCedarDoorStateEmpty: false,
      isCampStateEmpty: false,
    })
  }
  addCoinbase = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isWingStopStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: true,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeStateEmpty: false,
      isCedarDoorStateEmpty: false,
      isCampStateEmpty: false,
    })
  }
  addEnhabit = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isWingStopStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: true,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeStateEmpty: false,
      isCedarDoorStateEmpty: false,
      isCampStateEmpty: false,
    })
  }
  addMissionControl = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isWingStopStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: true,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeStateEmpty: false,
      isCedarDoorStateEmpty: false,
      isCampStateEmpty: false,
    })
  }
  addCool = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isWingStopStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: true,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeStateEmpty: false,
      isCedarDoorStateEmpty: false,
      isCampStateEmpty: false,
    })
  }
  addMeow = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isWingStopStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: true,
      isCakeStateEmpty: false,
      isLaVolpeStateEmpty: false,
      isCedarDoorStateEmpty: false,
      isCampStateEmpty: false,
    })
  }
  addCake = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isWingStopStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: true,
      isLaVolpeStateEmpty: false,
      isCedarDoorStateEmpty: false,
      isCampStateEmpty: false,
    })
  }
  addLaVolpe = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isWingStopStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeStateEmpty: true,
      isCedarDoorStateEmpty: false,
      isCampStateEmpty: false,
    })
  }
  addCedarDoor = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isWingStopStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeStateEmpty: false,
      isCedarDoorStateEmpty: true,
      isCampStateEmpty: false,
    })
  }
  addCamp = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isWingStopStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeStateEmpty: false,
      isCedarDoorStateEmpty: false,
      isCampStateEmpty: true,
    })
    console.log('camp was pressed')
  }
  render(){
    return (
      <div className="App">
          <Navigation returnToHomeState={this.returnToHomeState} />
          <div >   
          {
            this.state.isSlackStateEmpty && <Slack />
          }
          {
            this.state.isWingStopStateEmpty && <WingStop />
          }
          {
            this.state.isEncompassStateEmpty && <Encompass />
          }
          {
            this.state.isCoinbaseStateEmpty && <Coinbase />
          }
          {
            this.state.isEnhabitStateEmpty && <Enhabit />
          }
          {
            this.state.isMissionControlStateEmpty && <MissionControl />
          }
          {
            this.state.isCoolStateEmpty && <DoCoolShit />
          }
          {
            this.state.isMeowStateEmpty && <MeowWoof />
          }
          {
            this.state.isCakeStateEmpty && <CakePlease />
          }
          {
            this.state.isLaVolpeStateEmpty && <LaVolpe />
          }
          {
            this.state.isCedarDoorStateEmpty && <CedarDoor />
          }
          {
            this.state.isCampStateEmpty && <Camp />
          }
          <AddThumbButtons className="thumbnail-container"
                addSlack={this.addSlack}
                addWingStop={this.addWingStop}
                addEncompass={this.addEncompass}
                addCoinbase={this.addCoinbase}
                addEnhabit={this.addEnhabit}
                addMissionControl={this.addMissionControl}
                addCool={this.addCool} 
                addMeow={this.addMeow} 
                addCake={this.addCake}
                addLaVolpe={this.addLaVolpe}
                addCedarDoor={this.addCedarDoor}
                addCamp={this.addCamp}
                />
                
          </div>
      </div>
    );
  }
}

export default App;
