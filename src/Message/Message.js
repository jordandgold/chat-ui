import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="chat-window__message">
        <span>{this.props.body}</span>
      </div>
    );
  }
}

export default Message;