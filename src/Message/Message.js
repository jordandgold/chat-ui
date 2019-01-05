import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className={`chat-window__message user-${ this.props.user }`}>
        <span>{this.props.body}</span>
      </div>
    );
  }
}

export default Message;