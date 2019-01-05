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
      <div className="chat-box">
        {messages}
        <Form addMessage={this._addMessage.bind(this)} />
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