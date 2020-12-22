import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';

import { Connector } from 'react-mqtt';
import {subscribe} from 'react-mqtt';

import ResponsiveEmbed from 'react-responsive-embed'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Connector mqttProps="wss://test.mosquitto.org:8081">
          <div className="App"> 

            <Navigation />
              <Switch>
                <Route path="/PixelGarden" component={Home} exact/>
                <Route path="/PixelGarden/about" component={About}/>
                <Route path="/PixelGarden/contact" component={Contact}/>
                <Route component={Error}/>
              </Switch>

          </div>
        </Connector>
      </BrowserRouter>
      );
    }
}

export default App;
