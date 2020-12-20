import React from 'react';

import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';


export default class MessageContainer extends React.Component {

  addMessage(message){
    const {mqtt} = this.props;
    mqtt.publish('pixelGarden', message);
  }

  render(){
    return (
      <div>
        <MessageList data={this.props.data} />
        <MessageForm onSubmit={this.addMessage.bind(this)} />
      </div>
    )

  }
}
