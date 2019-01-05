import React, { Component } from 'react';

class Form extends Component {
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

export default Form;