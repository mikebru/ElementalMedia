import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';

import ResponsiveEmbed from 'react-responsive-embed'
import { Connector } from 'react-mqtt';
import {subscribe} from 'react-mqtt';
import _MessageContainer from './components/MessageContainer.js';

const MessageContainer = subscribe({topic: 'pixelGarden'})(_MessageContainer);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Connector mqttProps="wss://test.mosquitto.org:8081">
          <div className="App"> 

            <Navigation />
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Error}/>
              </Switch>


            <ResponsiveEmbed src='https://obs.ninja/?view=mikebru' allowFullScreen ratio='16:9'/>
            <MessageContainer/>
          </div>
        </Connector>
      </BrowserRouter>
      );
    }
}

export default App;
