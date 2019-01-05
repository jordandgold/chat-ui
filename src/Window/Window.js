import React, { Component } from 'react';
import Message from '../Message/Message';
import Form from '../Form/Form';

class Window extends Component {

  constructor() {
    super();
    this.state = {
      messages: [
        { id: 1, body: 'Hello! Thank you for contacting customer service.' },
        { id: 2, body: 'How can we help you today?' }
      ]
    };
  }

  render() {
    const messages = this._getMessages();
    return (
      <div className="chat-window">
        <div className="chat-window__messages">
          {messages}
        </div>
        <div className="chat-window__form">
          <Form addMessage={this._addMessage.bind(this)} />
        </div>
      </div>
    );
  }

  _getMessages() {
    return this.state.messages.map((message) => {
      return (<Message
                key={message.id}
                body={message.body} />);
    });
  }

  _addMessage(messageBody) {
    let message = {
      body: messageBody,
      id: Math.floor(Math.random() * (9999)),
    };
    this.setState({
      messages: this.state.messages.concat([message])
    });
  }
}

export default Window;