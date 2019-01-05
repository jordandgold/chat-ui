import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="chat-form">
        <form onSubmit={this._handleSubmit.bind(this)}>
          <div className="ter-input">
            <div className="ter-input__wrap">
              <input type="text" placeholder="Begin typing your message..." ref={input => this._body = input} />
            </div>
          </div>
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

export default Form;