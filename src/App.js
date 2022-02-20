import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import DoCoolShit from './components/DoCoolShit/DoCoolShit';
import CakePlease from './components/CakePlease/CakePlease';
import MeowWoof from './components/MeowWoof/MeowWoof';
import AddThumbButtons from './AddThumbButtons';
import Slack from './components/Slack/Slack';
import TechToolkit from './components/BounldessToolkit/TechToolkit';
import Encompass from './components/Encompass/Encompass';
import Coinbase from './components/Coinbase/Coinbase';
import Enhabit from './components/Enhabit/Enhabit';
import MissionControl from './components/MissionControl/MissionControl';

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
  addSlack = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: true,
      isTechToolkitStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false
    })
    console.log('add slack was pressed')
  }
  addTechToolkit = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isTechToolkitStateEmpty: true,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false
      // isLaVolpeEmpty: false,
      // isCedarDoorEmpty: false,
    })
    console.log('toolkit was pressed')
  }
  addEncompass = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isTechToolkitStateEmpty: false,
      isEncompassStateEmpty: true,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false
    })
  }
  addCoinbase = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isTechToolkitStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: true,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false
    })
  }
  addEnhabit = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isTechToolkitStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: true,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false
    })
  }
  addMissionControl = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isTechToolkitStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: true,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false
    })
  }
  addCool = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isTechToolkitStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: true,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false
      // isLaVolpeEmpty: false,
      // isCedarDoorEmpty: false,
      // isCampEmpty: false,
    })
  }
  addMeow = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isTechToolkitStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: true,
      isCakeStateEmpty: false
      // isLaVolpeEmpty: false,
      // isCedarDoorEmpty: false,
      // isCampEmpty: false,
    })
  }
  addCake = () => {
    this.setState({
      ...this.state,
      isSlackStateEmpty: false,
      isTechToolkitStateEmpty: false,
      isEncompassStateEmpty: false,
      isCoinbaseStateEmpty: false,
      isEnhabitStateEmpty: false,
      isMissionControlStateEmpty: false,
      isCoolStateEmpty: false,
      isMeowStateEmpty: false,
      isCakeStateEmpty: true
      // isLaVolpeEmpty: false,
      // isCedarDoorEmpty: false,
      // isCampEmpty: false,
    })
  }

  render(){
    return (
      <div className="App">
          <Navigation />
          <div >   
          {
            this.state.isSlackStateEmpty && <Slack />
          }
          {
            this.state.isTechToolkitStateEmpty && <TechToolkit />
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
          
          <AddThumbButtons className="thumbnail-container"
                addSlack={this.addSlack}
                addTechToolkit={this.addTechToolkit}
                addEncompass={this.addEncompass}
                addCoinbase={this.addCoinbase}
                addEnhabit={this.addEnhabit}
                addMissionControl={this.addMissionControl}
                addCool={this.addCool} 
                addMeow={this.addMeow} 
                addCake={this.addCake}
                // addLaVolpe={this.addLaVolpe}
                // addCedarDoor={this.addCedarDoor}
                // addCamp={this.addCamp}
                />
                
          </div>
      </div>
    );
  }
}

export default App;
