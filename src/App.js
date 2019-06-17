import React from 'react';
import logo from './logo.svg';
import './App.css';
import { sequenceExpression } from '@babel/types';

class App extends React.Component {
 constructor(props){
   super(props);
   // banks taken from FCC drum machine 
    this.bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];
    this.bankTwo = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];
this.state = {currentPadBank:this.bankTwo,currentVolume:50,currentPadBankText:"Bank Two"}
this.handleSlider = this.handleSlider.bind(this);
this.handleVolume= this.handleVolume.bind(this);
}
handleSlider(event) {
  console.log(event.target.value);
  if(event.target.value ==1){
    this.setState({currentPadBank:this.bankOne,currentPadBankText:"Bank One"})

  }
  if(event.target.value ==2){
    this.setState({currentPadBank:this.bankTwo,currentPadBankText:"Bank Two"})
  }
}
handleVolume(event) {
this.setState({currentVolume:event.target.value});

}
 render(){
  return (
    <div className="App">
      <header id ="drum-machine">
      <PadBoard volume={this.state.currentVolume} currentPadBank = {this.state.currentPadBank}/>
      <div id = "selector-container">
      <div className ="selector-container"><input type="range" min="1" max="2"  onChange = {this.handleSlider}  id="bankSelector" /><div id="padBankLabel">{this.state.currentPadBankText}</div></div> 
      <div className ="selector-container"><input type="range" min="0" max="100"  onChange = {this.handleVolume} value ={this.state.currentVolume} className="slider" id="volumeSelector" /><div id ="volumeLabel">{this.state.currentVolume}</div></div> 
       <div id = "display"></div>
       </div>
      
      </header>
      </div>
   
  );
}

componentDidMount () {
  const script = document.createElement("script");

  script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
  script.async = true;

  document.body.appendChild(script);
}
}

class DrumPad extends React.Component{
  constructor(props){
    super(props);
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.keydown = props.keydown;
 
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e){
    console.log(e.keyCode)
    console.log(this.keydown)
   
    if(e.keyCode == this.props.keydown)
    {
    this.playAudio()
   
    }
  }
  playAudio(){
    document.getElementById("display").innerHTML = this.props.name;
    let sound = document.getElementById(this.props.keyTrigger);
    console.log(this.props);
    sound.volume = this.props.volume/100;
    sound.currentTime = 0;
    sound.play();
   }  
  
  render(){ 
    return  (<button className ="drum-pad"  onClick = {this.playAudio} id ={this.props.name}>
      <audio className ="clip" id = {this.props.keyTrigger} src ={this.props.url}></audio>
      {this.props.keyTrigger}
      </button>);
  }
}


class PadBoard extends React.Component {
constructor(props){
   super(props);
   
  }
  render(){
 
    let padBank = this.props.currentPadBank.map((obj,i,arr) => {
      return (
      <DrumPad 
      keyTrigger = {arr[i].keyTrigger} keydown = {arr[i].keyCode} url = {arr[i].url} name = {arr[i].id}  volume= {this.props.volume}/>
      );
    });
   
    return (
      <div id ="padBank">
    {padBank}
    </div>
    );
  }
}
export default App;
