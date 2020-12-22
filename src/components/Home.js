import React from 'react';
import _MessageContainer from '../components/MessageContainer.js'; 
import {subscribe} from 'react-mqtt';
import ResponsiveEmbed from 'react-responsive-embed'
import _CameraControls from '../components/CameraControls.js'; 

const MessageContainer = subscribe({topic: 'pixelGarden'})(_MessageContainer);
const CameraControls = subscribe({topic: 'pixelGarden'})(_CameraControls);


const Home = () => {
    return (
       <div>
          <h1>Home</h1>
            <p>Home page body content</p>
         
            <ResponsiveEmbed src='https://obs.ninja/?view=mikebru' allowFullScreen ratio='16:9'/>

            <CameraControls/>

            <MessageContainer/>

       </div>
    );
}
 
export default Home;