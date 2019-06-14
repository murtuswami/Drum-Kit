import React from 'react';
import logo from './logo.svg';
import './App.css';
import { sequenceExpression } from '@babel/types';
import audio1 from './beep-01a.mp3'

class App extends React.Component {
 constructor(props){
   super(props);
   this.audio1 = React.createRef();
   this.playAudio = this.playAudio.bind(this);
 }
 playAudio(event){
  
  switch(event.target.id){
    case "1": 
    this.audio1.play()
    break;
   default:
     console.log("def")
     break;
 }
}
 render(){
  return (
    <div className="App">
      <header className="App-header">
        <div id = "drum-machine"> 
            <div id ="display"></div>
            <div id ="pads">
              <div id ="row">
                <button className="drum-pad" id="1" onClick={this.playAudio}><audio id="clip" id="Q" ref ={(audio1) => { this.audio1 = audio1;}} src= {audio1}></audio>Q</button>
                <button className="drum-pad"><audio id="clip" id="W" ref ={(audio2) => { this.audio2 = audio2;}}></audio>W</button>
                <button className="drum-pad"><audio id="clip" id="E" ref ={(audio3) => { this.audio3 = audio3;}}></audio>E</button>
              </div>
              <div id ="row">
                <button className="drum-pad"><audio id="clip" id="A"ref ={(audio4) => { this.audio4 = audio4;}} ></audio>A</button>
                <button className="drum-pad"><audio id="clip" id="S"ref ={(audio5) => { this.audio5 = audio5;}} ></audio>S</button>
                <button className="drum-pad"><audio id="clip" id="D"ref ={(audio6) => { this.audio6 = audio6;}} ></audio>D</button>
              </div>
              <div id ="row">
                <button className="drum-pad"><audio id="clip" id="Z"ref ={(audio7) => { this.audio7 = audio7;}}></audio>Z</button>
                <button className="drum-pad"><audio id="clip" id="X"ref ={(audio8) => { this.audio8= audio8;}}></audio>X</button>
                <button className="drum-pad"><audio id="clip" id="C"ref ={(audio9) => { this.audio9 = audio9;}}></audio>C</button>
              </div>

            </div>
        
        </div>

      </header>
    </div>
  );
}
}

export default App;
