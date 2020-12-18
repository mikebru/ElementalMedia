import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import ResponsiveEmbed from 'react-responsive-embed'
import { Connector } from 'react-mqtt';
import {subscribe} from 'react-mqtt';
import _MessageContainer from './MessageContainer.js';

const MessageContainer = subscribe({topic: 'pixelGarden'})(_MessageContainer);

class App extends Component {
  render() {
    return (
      <Connector mqttProps="wss://test.mosquitto.org:8081">
        <div className="App"> 
          <HelloWorld name="jim"/> 

          <ResponsiveEmbed src='https://obs.ninja/?view=mikebru' allowFullScreen ratio='16:9'/>

          <MessageContainer/>
          <br/> <br/> <br/>
        </div>
      </Connector>
      );
    }
}

export default App;
