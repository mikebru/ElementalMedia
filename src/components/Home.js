import React from 'react';

import _MessageContainer from '../components/MessageContainer.js';

import ResponsiveEmbed from 'react-responsive-embed'
 
import {subscribe} from 'react-mqtt';
const MessageContainer = subscribe({topic: 'pixelGarden'})(_MessageContainer);

const Home = () => {
    return (
       <div>
          <h1>Home</h1>
           <p>Home page body content</p>
         
           <ResponsiveEmbed src='https://obs.ninja/?view=mikebru' allowFullScreen ratio='16:9'/>
           <MessageContainer/>

       </div>
    );
}
 
export default Home;