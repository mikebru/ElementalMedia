import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const style = { float: 'left', width: 160, height: 400, marginBottom: 160, marginLeft: 50 };


export default class CameraControls extends React.Component {
 
    addMessage(message){
        const {mqtt} = this.props;
        mqtt.publish('pixelGarden', "Camera/Zoom/" + String(message));
      }


  render(){
    return (
        <div style={style}>
            <Slider
            vertical 
            onChange={this.addMessage.bind(this)}
            />           
       </div>
    )
    }   


}
 