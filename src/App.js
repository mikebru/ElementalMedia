import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import ResponsiveEmbed from 'react-responsive-embed'
import { Connector } from 'react-mqtt';
import {subscribe} from 'react-mqtt';
import _MessageContainer from './MessageContainer.js';

const MessageContainer = subscribe({topic: '@near/demo'})(_MessageContainer);

class App extends Component {
  render() {
    return (
      <Connector mqttProps="wss://test.mosquitto.org:8081">
        <div className="App"> 
          <HelloWorld name="jim"/> 
          <HelloWorld name="bill"/> 

          <ResponsiveEmbed src='https://obs.ninja/?view=mikebru' ratio='16:9' />

          <MessageContainer/>
        </div>
      </Connector>
      );
    }
}

export default App;
