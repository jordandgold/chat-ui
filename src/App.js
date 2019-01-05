import React, { Component } from 'react';
import './App.css';
import './css/styles.css';

class ChatApp extends Component {
  render() {
    return (
      <div className="chat-window container">
        <div className="window-controls"></div>
        <div className="chat-container">
          <div className="row">
            <div className="col-sm-4">
              <ChatList />
            </div>
            <div className="col-sm-8">
              <ChatBox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ChatList extends Component {
  render() {
    return (
      <ul className="chat-list">
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </ul>
    );
  }
}

class ChatBox extends Component {

  constructor() {
    super();
    this.state = {
      messages: [
        { id: 1, body: 'this is a test comment' },
        { id: 2, body: 'this is another test comment' }
      ]
    };
  }

  render() {
    const messages = this._getMessages();
    return (
      <div className="chat-box">
        {messages}
        <ChatForm addMessage={this._addMessage.bind(this)} />
      </div>
    );
  }

  _getMessages() {
    return this.state.messages.map((message) => {
      return (<ChatMessage
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

class ChatMessage extends Component {
  render() {
    return (
      <div className="chat-message">
        <span>{this.props.body}</span>
      </div>
    );
  }
}

class ChatListItem extends Component {
  render() {
    return (
      <li className="chat-list-item">
        Chat List Item
      </li>
    );
  }
}

class ChatForm extends Component {
  render() {
    return (
      <div className="chat-form">
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input type="text" ref={input => this._body = input} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  _handleSubmit(event) {
    event.preventDefault();

    this.props.addMessage(this._body.value);

    this._body.value = '';

    this.setState({ characters: 0 });
  }
}

export default ChatApp;
